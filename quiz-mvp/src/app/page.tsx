import Link from "next/link";
import quizzes from "@/quizzes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-2xl font-bold mt-20">Quick Quizzes</h1>
      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8 mx-4 md:max-w-3xl md:mx-auto">
        {Array.from(quizzes.values()).map((quiz) => (
          <li key={quiz.slug} className="relative">
            <Link href={`${quiz.slug}/1`}>
              <div className="h-50 w-full bg-amber-400 mb-2 relative -z-10">
                <Image src={quiz.img} alt="Background" fill={true} />
              </div>
              <div className="h-full flex items-center justify-center absolute top-0 w-full">
                <h2 className="text-white font-bold text-2xl">{quiz.name}</h2>
              </div>
            </Link>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
