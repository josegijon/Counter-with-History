import { PreviousNumbers } from "./components/PreviousNumbers";
import { useCounter } from "./hooks/useCounter"

export const getCounterColor = (value: number) => {
    if (value < 0) return 'text-red-500';
    if (value > 0) return 'text-green-500';
    return 'text-white';
};

export const AppCounter = () => {

    const { counter, counterIncrement, counterDecrement, handleAdd, handleAddPlus, handleSubtractPlus, handleReset, handleSubtract, handleUndo, previousNumber } = useCounter();

    const isIncrementWinning = counterIncrement > counterDecrement;

    return (
        <div className="bg-gradient flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Counter */}
            <div className="flex flex-col items-center gap-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 max-w-sm w-full">

                <h1 className="text-3xl font-bold text-center">
                    Counter with History
                </h1>

                {/* History section */}
                <PreviousNumbers history={previousNumber} />

                {/* Counter buttons */}
                <div className="flex items-center gap-6">
                    <button
                        className="cursor-pointer rounded-full border border-red-400 p-3 min-w-11 text-xl
                        hover:bg-red-400/20 active:scale-95 transition"
                        onClick={handleSubtractPlus}
                    >
                        -10
                    </button>

                    <button
                        className="cursor-pointer rounded-full border border-red-500 p-2 min-w-11 text-xl
                        hover:bg-red-500/20 active:scale-95 transition"
                        onClick={handleSubtract}
                    >
                        -1
                    </button>

                    <div
                        className={`text-3xl font-bold ${getCounterColor(counter)}`}
                    >
                        {counter}
                    </div>

                    <button
                        className="cursor-pointer rounded-full border border-green-500 p-2 min-w-11 text-xl
                        hover:bg-green-500/20 active:scale-95 transition"
                        onClick={handleAdd}
                    >
                        +1
                    </button>

                    <button
                        className="cursor-pointer rounded-full border border-green-400 p-2 min-w-11 text-xl
                        hover:bg-green-400/20 active:scale-95 transition"
                        onClick={handleAddPlus}
                    >
                        +10
                    </button>
                </div>

                <div className="flex gap-4">
                    {/* Reset */}
                    <button
                        className="cursor-pointer rounded-xl border border-blue-400 py-2 px-4 font-medium 
                    hover:bg-blue-400/20 active:scale-95 transition"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                    {/* Undo */}
                    <button
                        className="cursor-pointer rounded-xl border border-orange-400 py-2 px-4 font-medium 
                    hover:bg-orange-400/20 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleUndo}
                        disabled={previousNumber.length <= 1}
                    >
                        Undo
                    </button>
                </div>


            </div>

            {/* Increment vs decrement */}
            <div className="flex items-center gap-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 max-w-sm w-auto">
                <div
                    className={`flex flex-col items-center ${isIncrementWinning ? 'text-green-400' : counterIncrement < counterDecrement ? 'text-red-400' : ''}`}>
                    <p className="text-xl font-semibold">
                        Increment
                    </p>
                    <p>
                        {counterIncrement}
                    </p>
                </div>

                <div
                    className={`flex flex-col items-center ${!isIncrementWinning && counterDecrement > counterIncrement ? 'text-green-400' : counterDecrement < counterIncrement ? 'text-red-400' : ''}`}
                >
                    <p className="text-xl font-semibold">
                        Decrement
                    </p>
                    <p>
                        {counterDecrement}
                    </p>
                </div>
            </div>
        </div>
    )
}
