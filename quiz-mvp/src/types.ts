interface Quiz {
  name: string;
  subject: string;
  img: string;
  slug: string;
  questions: Question[];
}

interface Question {
  content: string;
  options: string[];
  answer: number; // index of correct option (0-based)
  explanation?: string;
}

type Answer = number | null;

type Attempt = Answer[];
