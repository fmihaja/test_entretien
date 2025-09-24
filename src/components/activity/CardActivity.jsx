export default function CardActivity({ title, desc, vertical, srcImg,children }) {
    const size=vertical? "w-[31%] h-[55%]":"w-[48%] h-[40%]"
    const bgImg=`bg-[url('/src/assets/activity/${srcImg}.png')]`
    return (
        <div className={`${size} rounded-4xl  ${bgImg} bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center`}>
            <div className="h-[60%] w-[80%] flex flex-col justify-start items-start pb-10 gap-2">
                <h5 className="font-bold text-xl text-left">{title}</h5>
                <p className="text-sm">{desc}</p>
                {children}
            </div>
        </div>
    );
}
