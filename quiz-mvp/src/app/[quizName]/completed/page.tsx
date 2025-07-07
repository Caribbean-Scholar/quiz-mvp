import Link from "next/link";

export default function Completed() {
  return (
    <div className="bg-primary-900 h-screen text-white">
      <div className="w-9/12 mx-auto md:max-w-lg pt-16">
        <span className="block text-center mb-1 font-bold">Final Score</span>
        <span className="block text-center font-bold text-success-500 mb-4 text-3xl">
          4/5
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
            <Link href="#">Start Over</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
