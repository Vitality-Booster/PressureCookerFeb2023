import {Hint} from "@lib/models/hint";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  code: string;
  hints: Hint[];
}
