"use client";
import { use, useState } from "react";
import quizzes from "@/quizzes";

export default function QuestionPage({
  params,
}: {
  params: Promise<{ quizName: string; questionId: number }>;
}) {
  const { quizName, questionId } = use(params);
  const [choice, setChoice] = useState<number | null>(null);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const quiz = quizzes.get(quizName);
  const index = questionId - 1;

  if (!quiz) {
    return "Quiz not found";
  }

  if (index < 0 || index > quiz.questions.length - 1) {
    return "Invalid question Id";
  }

  const question = quiz.questions[index];

  const handleOptionClick = (index: number) => {
    if (choice === null) {
      setChoice(index);
      setShowAnswers(true);
    }
  };

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
                className={`text-center w-full py-4 bg-gray-400  ${
                  !showAnswers ? "hover:border-white" : null
                } hover:cursor-pointer border-2 border-gray-400 ${
                  question.answer === index && showAnswers
                    ? "border-2 border-success-500 bg-hover-success hover:bg-hover-success"
                    : null
                } ${
                  choice === index && showAnswers && choice !== question.answer
                    ? "border-2 bg-hover-failure hover:bg-hover-failure"
                    : null
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
