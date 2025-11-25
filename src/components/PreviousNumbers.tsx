import { type FC } from "react";
import { getCounterColor } from "../AppCounter";

interface Props {
    history: number[];
}

export const PreviousNumbers: FC<Props> = ({ history }) => {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-center">History</h2>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                <ul className="flex gap-3 items-center justify-center flex-wrap">
                    {history.map((num, index) => (
                        <li
                            key={index}
                            className={`py-1 ${getCounterColor(num)}`}
                        >
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
