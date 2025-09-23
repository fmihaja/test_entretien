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
                    <div className="absolute -z-1 inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
                    <div className="h-screen w-1/15 bg-[#4097FF]/35"></div>
                    <div className="relative h-screen w-full pt-10 flex flex-col justify-between items-center">
                        <div className="w-[80%] h-30 border-b-2 border-b-white flex justify-between items-center">
                            <div className="w-1/2 h-full">
                                <img src="/src/assets/home/logo_azur.png" alt="" srcset="" className="w-[23%]" />
                            </div>
                            <div className="w-1/2 h-full bg-red-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
