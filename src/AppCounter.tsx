import { Minus, MoveRight, Plus, RefreshCcw, Undo } from "lucide-react";
import { HistorySection } from "./components/HistorySection";
import { useCounter } from "./hooks/useCounter"
import { Statistics } from "./components/Statistics";
import { useState } from "react";
import { glassPanel } from "./constants/styles";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";


export const AppCounter = () => {

    const { counter, counterIncrement, counterDecrement, handleAdd, handleReset, handleSubtract, handleUndo, previousNumber, handleSetCounter } = useCounter();

    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = () => {
        const parsed = Number(inputValue);

        if (!isNaN(parsed) && inputValue.trim() !== '') {
            handleSetCounter(parsed);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="bg-[#0a0a0a] text-slate-100 min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className={`${glassPanel} rounded-3xl w-full max-w-md p-8 shadow-2xl flex flex-col gap-8 relative overflow-hidden`}>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
                    <CounterDisplay value={counter} />

                    <CounterControls onIncrement={handleAdd} onDecrement={handleSubtract} />

                    <div className="flex flex-col 3xs:flex-row items-center justify-between gap-4 relative z-10">
                        <div className="flex-1">
                            <div className="relative group">
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
                                        className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white placeholder:text-slate-600"
                                    />
                                    <button
                                        className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all rounded-lg p-1
                                            ${inputValue.length > 0
                                                ? 'hover:bg-white/10 cursor-pointer hover:scale-110 active:scale-95'
                                                : 'cursor-not-allowed opacity-50'
                                            }`}
                                        onClick={handleSubmit}
                                        disabled={!inputValue || inputValue.length === 0}
                                    >
                                        <MoveRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                className="flex items-center justify-center rounded-xl h-12 w-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                                onClick={handleUndo}
                            >
                                <Undo size={24} />
                            </button>

                            <button
                                className="flex items-center justify-center rounded-xl h-12 w-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                                onClick={handleReset}
                            >
                                <RefreshCcw size={24} />
                            </button>
                        </div>
                    </div>

                    <HistorySection history={previousNumber} />
                    <Statistics increments={counterIncrement} decrements={counterDecrement} />

                </div>
            </main>
        </div>
    )
}
