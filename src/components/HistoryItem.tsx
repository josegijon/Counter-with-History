import { MoveDownLeft, MoveUpRight, Pencil } from "lucide-react";
import type { FC } from "react";

interface HistoryItemProps {
    currentValue: number;
    previousValue: number;
}

export const HistoryItem: FC<HistoryItemProps> = ({ currentValue: currentValue, previousValue }) => {

    const difference = currentValue - previousValue;

    const renderContent = () => {
        if (difference === 1) {
            return (
                <>
                    <MoveUpRight className="text-success" size={24} />
                    <span className="text-sm font-medium">Increment by 1</span>
                </>
            )
        }

        if (difference === -1) {
            return (
                <>
                    <MoveDownLeft className="text-danger" size={24} />
                    <span className="text-sm font-medium">Decrement by 1</span>
                </>
            )
        }

        return (
            <>
                <Pencil className="text-primary" size={24} />
                <span className="text-sm font-medium">Jump to {currentValue}</span>
            </>
        )
    }

    return (
        <div className="flex items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
                {renderContent()}
            </div>
        </div>
    )
}
