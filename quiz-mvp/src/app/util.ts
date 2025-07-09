export const findFirstUnanswered = (attempt: Answer[]): number => {
  return attempt.findIndex((answer) => answer === null);
};

export const createNewQuizAttempt = (quiz: Quiz): Attempt => {
  return new Array(quiz.questions.length).fill(null);
};
