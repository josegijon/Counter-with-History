import { type FC } from "react";
import { RefreshCcw, Undo } from "lucide-react";
import { iconButton } from "../constants/styles";

interface ActionButtonsProps {
    onUndo: () => void;
    onReset: () => void;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ onUndo, onReset }) => {
    return (
        <div className="flex gap-4">
            <button
                className={iconButton}
                onClick={onUndo}
                aria-label="Undo last action"
            >
                <Undo size={24} />
            </button>
            <button
                className={iconButton}
                onClick={onReset}
                aria-label="Reset counter"
            >
                <RefreshCcw size={24} />
            </button>
        </div>
    );
};