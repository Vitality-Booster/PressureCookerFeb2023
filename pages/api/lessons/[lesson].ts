import { LessonDefinitions } from "@/lib/lessons";
import { Lesson } from "@/lib/models/lesson";
import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

type Data = {
  ok: boolean;
  data?: Lesson;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { lesson } = req.query;

  if (typeof lesson !== "string") {
    res.status(400).json({
      ok: false,
    });
    return;
  }

  const definition =
    LessonDefinitions.get(lesson);

  if (!definition) {
    res.status(404).json({
      ok: false,
    });
    return;
  }

  res.status(200).json({
    ok: true,
    data: definition,
  });
}
