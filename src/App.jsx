import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-full h-full">
                <div className="relative -z-2 h-screen w-screen bg-[url('/src/assets/bgImg.jpg')] bg-center bg-cover bg-no-repeat flex justify-start items-center">
                    <div className="absolute -z-1 inset-0 bg-gradient-to-br from-black/90 to-transparent"></div>
                    <div className="h-screen w-1/15 bg-[#4097FF]/35"></div>
                    <div className="relative h-screen w-full pt-10 flex flex-col justify-between items-center">
                        <div className="w-[80%] h-30 border-b-2 border-b-white flex justify-between items-center">
                            <div className="w-1/3 h-full">
                                <img
                                    src="/src/assets/home/logo_azur.png"
                                    alt=""
                                    srcset=""
                                    className="w-[45%]"
                                />
                            </div>
                            <div className="w-full h-full flex justify-end items-center gap-15 me-3">
                                <h4 className="text-white text-xl font-semibold h-full border-b-4 border-b-white flex justify-center items-center">
                                    À propos
                                </h4>
                                <h4 className="text-white text-xl font-semibold">
                                    Localisation
                                </h4>
                                <h4 className="text-white text-xl font-semibold">
                                    Activités
                                </h4>
                                <h4 className="text-white text-xl font-semibold">
                                    Réservé
                                </h4>
                            </div>
                            <div className="w-20 h-18 flex flex-col justify-center items-center gap-2 ms-7">
                                <div className="w-full border-2 border-white rounded-xl"></div>
                                <div className="w-full border-2 border-white rounded-xl"></div>
                                <div className="w-[80%] border-2 border-white rounded-xl ms-auto"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
