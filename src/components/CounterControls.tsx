import { Minus, Plus } from "lucide-react";

interface CounterControlsProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export const CounterControls = ({ onIncrement, onDecrement }: CounterControlsProps) => {
    return (
        <div className="flex gap-4 relative z-10">
            <button
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl h-16 bg-success/10 border border-success/20 text-success hover:bg-success/20 transition-all cursor-pointer active:scale-95"
                onClick={onIncrement}
                aria-label="Increment counter"
            >
                <Plus size={24} />
                <span className="font-bold text-lg hidden 3xs:block">Increment</span>
            </button>
            <button
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl h-16 bg-danger/10 border border-danger/20 text-danger hover:bg-danger/20 transition-all cursor-pointer active:scale-95"
                onClick={onDecrement}
                aria-label="Decrement counter"
            >
                <Minus size={24} />
                <span className="font-bold text-lg hidden 3xs:block">Decrement</span>
            </button>
        </div>
    );
}
