"use client";
import { createNewQuizAttempt } from "@/app/util";
import quizzes from "@/quizzes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

export default function Completed({
  params,
}: {
  params: Promise<{ quizName: string }>;
}) {
  const router = useRouter();
  const { quizName } = use(params);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const [attempt, setAttempt] = useState<Attempt>([]);
  const quiz = quizzes.get(quizName);
  let correct = 0;

  for (let i = 0; i < attempt.length; i++) {
    if (attempt[i] == quiz!.questions[i].answer) {
      correct++;
    }
  }

  useEffect(() => {
    if (!quiz) {
      router.push("/");
      return;
    }

    setAttempt(JSON.parse(localStorage.getItem(quizName) ?? "[]"));
  }, [quiz]);

  if (!quiz) {
    return;
  }

  const handleStartOver = () => {
    let newAttempt = createNewQuizAttempt(quiz);
    localStorage.setItem(quizName, JSON.stringify(newAttempt));
    router.push(`/${quiz.slug}/1`);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-primary-900 h-screen text-white">
      <div className="w-9/12 mx-auto md:max-w-lg pt-16">
        <ScoreCard score={correct} total={quiz!.questions.length} />
        <p className="mt-8 mb-4">
          Liked the quiz? Join our email list to get access to exclusive
          disocunts and app updates.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-1" htmlFor="name">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Jane Smith"
            className="w-full border-1 border-primary-100 py-1 px-1"
            name="name"
          ></input>
          <FieldErrorMessage error={errors.name} />
          <label className="mt-4  block" htmlFor="email">
            Email:
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Please enter a valid email address.",
              },
            })}
            className="w-full border-1 border-primary-100 py-1 px-1 mb-4"
            name="email"
          ></input>
          <FieldErrorMessage error={errors.email} />
          <div className="flex justify-end">
            <button className="bg-primary-500 px-4 py-1 text-white ">
              Subscribe
            </button>
          </div>
        </form>

        <ul className="font-bold text-center mt-10">
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

const FieldErrorMessage = ({ error }: { error: FieldError | undefined }) => {
  if (!error) return;
  return <span className="text-red-500">{error.message}</span>;
};

const ScoreCard = ({ score, total }: { score: number; total: number }) => {
  let percentage = score / total;
  let color;
  let title;
  let tagline;

  if (percentage >= 0.75) {
    color = "text-success-500";
    title = "Congratulations!";
    tagline = "Great Job! You’re well on your way";
  } else if (percentage > 0.5) {
    color = "text-amber-500";
    title = "Not Bad!";
    tagline = "With some more practice you'll get there.";
  } else {
    color = "text-red-500";
    title = "Tough run!";
    tagline = "You may want to give this one another try.";
  }

  return (
    <div>
      <span className="block text-center mb-1 font-bold">Final Score</span>
      <span className={`block text-center font-bold ${color} mb-2 text-3xl`}>
        {score}/{total}
      </span>
      <h1 className="text-center text-3xl font-bold mb-1">{title}</h1>
      <p className="text-center">{tagline}</p>
    </div>
  );
};

type FormInput = {
  name: string;
  email: string;
};
