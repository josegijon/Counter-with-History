
interface CounterDisplayProps {
    value: number;
}

export const CounterDisplay = ({ value }: CounterDisplayProps) => {

    return (
        <div className="text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                Current Count
            </span>
            <h1 className={`text-[120px] font-extrabold leading-none tracking-tighter drop-shadow-lg`}>
                {value}
            </h1>
        </div>
    )
}
