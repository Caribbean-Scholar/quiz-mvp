import { use } from "react";

export default function QuestionPage({
  params,
}: {
  params: Promise<{ quizName: string; questionId: number }>;
}) {
  const { quizName, questionId } = use(params);
  return (
    <div>
      <h1>
        {quizName} - {questionId}
      </h1>
    </div>
  );
}
