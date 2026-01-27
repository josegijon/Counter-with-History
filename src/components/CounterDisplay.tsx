
interface CounterDisplayProps {
    value: number;
}

export const CounterDisplay = ({ value }: CounterDisplayProps) => {

    const getCounterColor = (count: number): string => {
        if (count > 0) return 'text-success';
        if (count < 0) return 'text-danger';
        return 'text-white';

    }

    return (
        <div className="text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                Current Count
            </span>
            <h1 className={`${getCounterColor(value)} text-[120px] font-extrabold leading-none tracking-tighter drop-shadow-lg`}>
                {value}
            </h1>
        </div>
    )
}
