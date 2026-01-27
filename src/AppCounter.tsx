import { Minus, MoveRight, Plus, RefreshCcw, Undo } from "lucide-react";
import { HistorySection } from "./components/HistorySection";
import { useCounter } from "./hooks/useCounter"
import { Statistics } from "./components/Statistics";
import { useState } from "react";
import { glassPanel } from "./constants/styles";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";
import { JumpToNumber } from "./components/JumpToNumber";


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

    return (
        <div className="bg-[#0a0a0a] text-slate-100 min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className={`${glassPanel} rounded-3xl w-full max-w-md p-8 shadow-2xl flex flex-col gap-8 relative overflow-hidden`}>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
                    <CounterDisplay value={counter} />

                    <CounterControls onIncrement={handleAdd} onDecrement={handleSubtract} />

                    <div className="flex flex-col 3xs:flex-row items-center justify-between gap-4 relative z-10">
                        <JumpToNumber onJump={handleSetCounter} />

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
