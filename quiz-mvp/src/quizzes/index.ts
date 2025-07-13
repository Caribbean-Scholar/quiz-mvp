import { basicArithmeticQuiz } from "./arithmetic";
import { consumerArithmeticQuiz } from "./consumer";
import { simpleFunctionsQuiz } from "./functions";

let quizMap = new Map<string, Quiz>();
quizMap.set("arithmetic", basicArithmeticQuiz);
quizMap.set("consumer", consumerArithmeticQuiz);
quizMap.set("functions", simpleFunctionsQuiz);
export default quizMap;
