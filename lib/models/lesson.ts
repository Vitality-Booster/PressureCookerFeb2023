import {Hint} from "@lib/models/hint";
import {ResearchData} from "@lib/models/research_data";

export interface Lesson {
  id: string;
  course: string,
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  code: string;
  hints: Hint[];
  researchMaterial: ResearchData,
}
