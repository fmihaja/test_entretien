export default function ButtonNext({ size, color, otherStyle }) {
    let style=`w-${size} h-${size} border-[${color}] text-[${color}]`
    return (
        <div
            className={`border-2 ${style} rounded-full text-xs font-bold flex justify-center items-center ${otherStyle}`}
        >
            {">"}
        </div>
    );
}
