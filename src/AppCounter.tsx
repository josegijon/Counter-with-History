import { HistorySection } from "./components/HistorySection";
import { useCounter } from "./hooks/useCounter"
import { Statistics } from "./components/Statistics";
import { glassPanel } from "./constants/styles";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";
import { JumpToNumber } from "./components/JumpToNumber";
import { ActionButtons } from "./components/ActionButtons";


export const AppCounter = () => {

    const {
        counter,
        counterIncrement,
        counterDecrement,
        handleAdd,
        handleReset,
        handleSubtract,
        handleUndo,
        previousNumber,
        handleSetCounter
    } = useCounter();

    return (
        <div className="bg-[#0a0a0a] text-slate-100 min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className={`${glassPanel} rounded-3xl w-full max-w-md p-8 shadow-2xl flex flex-col gap-8 relative overflow-hidden`}>

                    {/* Decorative */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>

                    <CounterDisplay value={counter} />

                    <CounterControls onIncrement={handleAdd} onDecrement={handleSubtract} />

                    <div className="flex flex-col 3xs:flex-row items-center justify-between gap-4 relative z-10">
                        <JumpToNumber onJump={handleSetCounter} />

                        <ActionButtons onUndo={handleUndo} onReset={handleReset} />
                    </div>

                    <HistorySection history={previousNumber} />
                    <Statistics increments={counterIncrement} decrements={counterDecrement} />

                </div>
            </main>
        </div>
    )
}
