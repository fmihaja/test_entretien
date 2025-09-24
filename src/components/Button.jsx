export default function Button({ width, bgColor, borderColor, children,otherStyle }) {
    const style=bgColor? `w-[${width}] p-3 bg-[${bgColor}]`:`w-[${width}] p-3 border-2 border-[${borderColor}]`
    return (
        <div className={`${style} mt-3 rounded-full flex justify-center items-center gap-10 ${otherStyle}`}>
            {children}
        </div>
    );
}
