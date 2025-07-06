import { basicArithmeticQuiz } from "./arithmetic";

let quizMap = new Map<string, Quiz>();
quizMap.set("arithmetic", basicArithmeticQuiz);
export default quizMap;
