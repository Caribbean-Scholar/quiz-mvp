"use client";
import { createNewQuizAttempt } from "@/app/util";
import quizzes from "@/quizzes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef } from "react";

export default function Completed({
  params,
}: {
  params: Promise<{ quizName: string }>;
}) {
  const router = useRouter();
  const { quizName } = use(params);
  const attempt = useRef<Attempt>(
    JSON.parse(localStorage.getItem(quizName) ?? "[]")
  );
  const quiz = quizzes.get(quizName);
  let correct = 0;

  for (let i = 0; i < quiz!.questions.length; i++) {
    if (attempt.current[i] == quiz!.questions[i].answer) {
      correct++;
    }
  }

  if (!quiz) {
    return;
  }

  useEffect(() => {
    if (!quiz) {
      router.push("/");
      return;
    }
  }, [quiz]);

  const handleStartOver = () => {
    let newAttempt = createNewQuizAttempt(quiz);
    localStorage.setItem(quizName, JSON.stringify(newAttempt));
    router.push(`/${quiz.slug}/1`);
  };

  return (
    <div className="bg-primary-900 h-screen text-white">
      <div className="w-9/12 mx-auto md:max-w-lg pt-16">
        <span className="block text-center mb-1 font-bold">Final Score</span>
        <span className="block text-center font-bold text-success-500 mb-4 text-3xl">
          {correct}/{quiz!.questions.length}
        </span>

        <h1 className="text-center text-3xl font-bold mb-1">
          Congratulations!
        </h1>
        <p className="text-center">Great Job! You’re well on your way.</p>

        <p className="mt-8 mb-4">
          Liked the quiz? Join our email list to get access to exclusive
          disocunts and app updates.
        </p>

        <form>
          <label className="mb-1" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full border-1 border-primary-100 pt-1 px-0.5"
            name="email"
          ></input>
          <div className="flex justify-end">
            <button className="bg-primary-500 px-4 py-1 text-white ">
              Subscribe
            </button>
          </div>
        </form>

        <ul className="font-bold text-center mt-16">
          <li className="mb-4">
            <Link href="/">Try another quiz</Link>
          </li>
          <li className="mb-4">
            <button onClick={handleStartOver}>Start Over</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
