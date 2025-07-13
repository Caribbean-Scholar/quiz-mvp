const simpleFunctions: Question[] = [
  {
    content: "If f(x) = 2x + 1, what is f(3)?",
    options: ["6", "7", "8", "9"],
    answer: 1,
    explanation: "2 × 3 + 1 = 6 + 1 = 7",
  },
  {
    content: "If f(x) = x² − 4, what is f(5)?",
    options: ["21", "25", "20", "24"],
    answer: 0,
    explanation: "5² − 4 = 25 − 4 = 21",
  },
  {
    content: "If f(x) = x − 2 and g(x) = x², what is f(g(3))?",
    options: ["5", "7", "9", "6"],
    answer: 1,
    explanation: "g(3) = 9, then f(9) = 9 − 2 = 7",
  },
  {
    content:
      "A function f is defined as f(x) = 3x − 2. If f(a) = 10, what is a?",
    options: ["4", "3", "5", "6"],
    answer: 0,
    explanation: "3a − 2 = 10 → 3a = 12 → a = 4",
  },
  {
    content:
      "If f(x) = 2x + 5, which of the following pairs (x, f(x)) is correct?",
    options: ["(1, 6)", "(2, 8)", "(3, 11)", "(4, 9)"],
    answer: 2,
    explanation: "2(3) + 5 = 11 => (3, 11) is a correct pair",
  },
];

export const simpleFunctionsQuiz: Quiz = {
  name: "Functions",
  subject: "Mathematics",
  slug: "functions",
  img: "/blue-bg.svg",
  questions: simpleFunctions,
};
