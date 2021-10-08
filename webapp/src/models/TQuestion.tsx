export type TQuestion = {
  no: number;
  description: string;
  question: string;
  notes: string[] | undefined;
  answer: string;
  wrongs: string[];
};
