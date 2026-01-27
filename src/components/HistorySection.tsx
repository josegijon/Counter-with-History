import { type FC } from "react";
import { HistoryItem } from "./HistoryItem";

interface Props {
    history: number[];
}

export const HistorySection: FC<Props> = ({ history }: Props) => {
    return (
        <div className="border-t border-white pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    History
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-500">
                    Live
                </span>
            </div>

            <div className="h-40 overflow-y-auto custom-scrollbar flex flex-col gap-2 pr-2">
                {history.slice(0, -1).map((value, index) => (
                    <HistoryItem
                        key={index}
                        currentValue={value}
                        previousValue={history[index + 1]}
                    />
                ))}
            </div>
        </div>
    )
}
