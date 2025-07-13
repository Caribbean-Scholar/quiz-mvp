const basicArithmeticWarmUp: Question[] = [
  {
    content: "5 + 3",
    options: ["7", "8", "9", "6"],
    answer: 1,
  },
  {
    content: "12 - 4",
    options: ["6", "9", "8", "10"],
    answer: 2,
  },
  {
    content: "2 × 6",
    options: ["10", "12", "8", "14"],
    answer: 1,
  },
  {
    content: "20 ÷ 5",
    options: ["3", "5", "4", "2"],
    answer: 2,
  },
  {
    content: "Which number is even?",
    options: ["3", "7", "9", "10"],
    answer: 3,
    explanation: "Even numbers divide evenly by 2. 10 ÷ 2 = 5.",
  },
];

export const basicArithmeticQuiz: Quiz = {
  name: "Warm Up",
  subject: "Mathematics",
  slug: "arithmetic",
  img: "/blue-bg.svg",
  questions: basicArithmeticWarmUp,
};
