interface Quiz {
  name: string;
  subject: string;
  img: string;
  questions: Question[];
}

interface Question {
  content: string;
  options: string[];
  answer: number; // index of correct option (0-based)
  explanation?: string;
}
