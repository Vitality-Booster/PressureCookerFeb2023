import { spawn } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
    ok: boolean;
    execution_time?: number;
}

interface Body {
    code: string;
}

const wait5seconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("foo"), 5000);
    });
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body: Body = req.body;

    if (!body.code) {
        res.status(400).json({
            ok: false,
        });
        return;
    }

    const start = Date.now();

    // Spawn python3 process to execute code
    const python = spawn("python3", ["-c", body.code]);

    let finished = false;

    python.on("close", (_) => {
        finished = true;
        const end = Date.now();

        res.status(200).json({
            ok: true,
            execution_time: end - start,
        });
    });

    python.on("error", (err) => {
        console.log(err);
    });

    // Await both python and wait5seconds, whichever finishes first, use
    // await/async to make this code more readable
    await new Promise((resolve) => {
        setTimeout(() => {
            res.status(200).json({
                ok: true,
                execution_time: -1,
            });

            if (finished) return;

            python.kill();
            resolve("");
        }, 5000);
    });
}
