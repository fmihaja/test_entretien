export default function LocationCard({srcImg,desc}) {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                <img
                    src={`/src/assets/location/${srcImg}.png`}
                    className="w-1/2 h-auto"
                    alt=""
                    srcset=""
                />
            </div>
            <p className="text-white text-center w-25 h-50">
                {desc}
            </p>
        </div>
    );
}
