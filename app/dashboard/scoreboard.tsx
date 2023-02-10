import { showScoreboard } from "@/lib/store/scoreboard";
import { useRecoilState } from "recoil";

interface ScoreProps {
    name: string;
    place: string;
    score: string;
    isUser: boolean;
}

function Score({name, place, score, isUser}: ScoreProps) {
    return (
    <tr className={`${isUser && "active"}`}>
        <th>{place}</th>
        <td>{name}</td>
        <td>{score}</td>
    </tr>
    )
}

export default function ScoreboardClicked() {
    const [open, setOpen] = useRecoilState(showScoreboard);
    return (
        <div
                className={`fixed w-96 p-2 rounded-md min-h-[16rem] bg-base-300 shadow-xl z-50 left-20 top-2
                ${!open && "hidden"}`}
            >
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                <Score name={"Name"} place={"Place"} score={"Score"} isUser={false} />
            </thead>
            <tbody>
                <Score name={"Best_User"} place={"1"} score={"100000"} isUser={false} />
                <Score name={"..."} place={"..."} score={"..."} isUser={false} />
                <Score name={"Better_User"} place={"50"} score={"5000"} isUser={false} />
                <Score name={"You_User"} place={"51"} score={"4657"} isUser={true} />
                <Score name={"Worse_User"} place={"52"} score={"4000"} isUser={false} />
                <Score name={"..."} place={"..."} score={"..."} isUser={false} />
                <Score name={"Worst_User"} place={"100"} score={"300"} isUser={false} />
            </tbody>

        </table>
    </div>
        </div>
    )
}
