"use client";
import { use, useEffect, useRef, useState } from "react";
import quizzes from "@/quizzes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { findFirstUnanswered } from "@/app/util";

const getNextQuestion = (index: number, quizLength: number) => {
  if (index + 2 > quizLength) {
    return "completed";
  }
  return `${index + 2}`;
};

export default function QuestionPage({
  params,
}: {
  params: Promise<{ quizName: string; questionId: number }>;
}) {
  const router = useRouter();
  const { quizName, questionId } = use(params);
  const [choice, setChoice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const attempt = useRef<Attempt>(
    JSON.parse(localStorage.getItem(quizName) as string)
  );
  const showAnswers = choice !== null;

  const quiz = quizzes.get(quizName);
  const index = questionId - 1;

  useEffect(() => {
    if (!quiz) {
      router.push("/");
      return;
    }

    let found = findFirstUnanswered(attempt.current);

    if (found == -1) {
      router.replace("completed");
      return;
    }

    if (found != index) {
      router.replace(`${found + 1}`);
      return;
    }

    setLoading(false);
  }, [quiz]);

  if (!quiz) return null;

  const question = quiz.questions[index];

  const handleOptionClick = (answer: number) => {
    if (choice === null) {
      attempt.current[index] = answer;
      localStorage.setItem(quizName, JSON.stringify(attempt.current));
      setChoice(answer);
    }
  };

  if (loading) {
    return (
      <div className="bg-primary-900 h-screen text-white flex items-center justify-center"></div>
    );
  }

  return (
    <div className="bg-primary-900 h-screen text-white">
      <div className="mx-8 md:max-w-3xl md:mx-auto">
        <h1 className="py-8 text-center">{quiz.name}</h1>
        <div className="h-48 flex items-center">
          <p className="text-center w-full font-bold text-2xl">
            {question.content}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {question.options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => handleOptionClick(index)}
                className={`
              text-center w-full py-4 border-2 hover:cursor-pointer 
              ${!showAnswers ? "hover:border-white" : ""} 
              ${
                showAnswers && question.answer === index
                  ? "border-success-500 bg-hover-success"
                  : ""
              }
              ${
                showAnswers && choice === index && choice !== question.answer
                  ? "border-failure-500 bg-hover-failure"
                  : "border-gray-400 bg-gray-400"
              }
            `}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        {showAnswers ? (
          <div className="flex justify-between mt-4">
            <button>Read Explanation</button>
            <Link href={`${getNextQuestion(index, quiz.questions.length)}`}>
              Next Question
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
