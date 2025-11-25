import { useState } from "react"

export const useCounter = (initialValue: number = 0) => {

    const [counter, setCounter] = useState(initialValue);
    const [counterIncrement, setCounterIncrement] = useState(0);
    const [counterDecrement, setCounterDecrement] = useState(0);
    const [previousNumber, setPreviousNumber] = useState<number[]>([initialValue]);

    const updateCounter = (newValue: number, isIncrement: boolean) => {
        setCounter(newValue);
        setPreviousNumber([newValue, ...previousNumber]);

        if (isIncrement) {
            setCounterIncrement(counterIncrement + 1);
        } else {
            setCounterDecrement(counterDecrement + 1);
        }
    };

    const handleAdd = () => updateCounter(counter + 1, true);
    const handleAddPlus = () => updateCounter(counter + 10, true);
    const handleSubtract = () => updateCounter(counter - 1, false);
    const handleSubtractPlus = () => updateCounter(counter - 10, false);

    const handleReset = () => {
        setCounter(initialValue);
        setPreviousNumber([initialValue]);
        setCounterIncrement(0);
        setCounterDecrement(0);
    };

    const handleUndo = () => {
        if (previousNumber.length === 1) return;

        if (previousNumber[0] > previousNumber[1]) {
            setCounterIncrement(counterIncrement - 1);
        } else {
            setCounterDecrement(counterDecrement - 1);
        }

        setCounter(previousNumber[1]);
        // previousNumber.shift(); MAL, ESTÁ MUTANDO
        setPreviousNumber(previousNumber.slice(1));
    }

    return {
        // Values
        counter,
        counterIncrement,
        counterDecrement,
        previousNumber,

        // Methods
        handleAdd,
        handleAddPlus,
        handleSubtract,
        handleSubtractPlus,
        handleReset,
        handleUndo,
    };
}
