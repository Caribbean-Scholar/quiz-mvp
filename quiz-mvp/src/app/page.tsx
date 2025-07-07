import Link from "next/link";
import quizzes from "@/quizzes";

export default function Home() {
  return (
    <div>
      <h1>Caribbean Scholar Quiz App</h1>
      <ul>
        {Array.from(quizzes.values()).map((quiz) => (
          <li>
            <Link href={`${quiz.slug}/1`}>{quiz.name}</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
