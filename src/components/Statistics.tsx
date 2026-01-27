import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

interface StatisticsProps {
    increments: number;
    decrements: number;
}

export const Statistics = ({ increments, decrements }: StatisticsProps) => {
    return (
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
                <ArrowUpRight size={24} />
                <span>Increments: <b className="text-slate-300">{increments}</b></span>
            </div>

            <div className="h-1 w-1 rounded-full bg-slate-700"></div>

            <div className="flex items-center gap-2">
                <ArrowDownLeft size={24} />
                <span>Increments: <b className="text-slate-300">{decrements}</b></span>
            </div>
        </div>
    )
}
