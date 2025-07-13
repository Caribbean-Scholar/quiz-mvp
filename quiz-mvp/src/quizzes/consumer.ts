const consumerArithmetic: Question[] = [
  {
    content: "A pen costs $3. How much would 4 pens cost?",
    options: ["$7", "$12", "$10", "$15"],
    answer: 1,
  },
  {
    content: "You buy an item for $50 and get 10% off. What is the discount?",
    options: ["$40", "$10", "$5", "$15"],
    answer: 2,
    explanation: "10% of $50 is $5. 10 ÷ 100 × 50 = 5.",
  },
  {
    content: "A t-shirt costs $20. What is the total for 3 t-shirts?",
    options: ["$60", "$50", "$40", "$30"],
    answer: 0,
  },
  {
    content:
      "You spend $80 and pay with a $100 bill. How much change do you get?",
    options: ["$10", "$15", "$20", "$25"],
    answer: 2,
  },
  {
    content: "If a dozen eggs costs $6, how much does one egg cost?",
    options: ["$0.50", "$0.25", "$0.75", "$1.00"],
    answer: 0,
    explanation: "$6 ÷ 12 = $0.50 per egg.",
  },
];

export const consumerArithmeticQuiz: Quiz = {
  name: "Consumer Arithmetic",
  subject: "Mathematics",
  slug: "consumer",
  img: "/blue-bg.svg",
  questions: consumerArithmetic,
};
