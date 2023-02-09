import { Lesson } from "@/lib/models/lesson";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    ok: boolean;
    data?: Lesson;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        ok: true,
        data: {
            id: "",
            title: "First Example Lesson",
            description: "",
            code: "",
            hints: [],
        },
    });
}
