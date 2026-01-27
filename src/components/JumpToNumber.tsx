import { type FC, useState, useCallback } from "react";
import { MoveRight } from "lucide-react";

interface JumpToNumberProps {
    onJump: (value: number) => void;
}

export const JumpToNumber: FC<JumpToNumberProps> = ({ onJump }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = useCallback(() => {
        const parsed = Number(inputValue);

        if (!isNaN(parsed) && inputValue.trim() !== '') {
            onJump(parsed);
            setInputValue('');
        }
    }, [inputValue, onJump]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const isValidInput = inputValue.trim().length > 0;

    return (
        <div className="flex-1">
            <div className="relative">
                <label className="absolute -top-2 left-3 px-1 bg-[#121212] text-[10px] font-bold uppercase tracking-wider text-slate-400 z-20">
                    Jump to number
                </label>
                <div className="relative">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="number"
                        placeholder="00"
                        aria-label="Jump to specific number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white placeholder:text-slate-600"
                    />
                    <button
                        className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all rounded-lg p-1
                            ${isValidInput
                                ? 'hover:bg-white/10 cursor-pointer hover:scale-110 active:scale-95'
                                : 'cursor-not-allowed opacity-50'
                            }`}
                        onClick={handleSubmit}
                        disabled={!isValidInput}
                        aria-label="Submit jump value"
                    >
                        <MoveRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};