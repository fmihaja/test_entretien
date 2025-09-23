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
                    <div className="h-screen w-1/25 bg-[#4097FF]/35 flex flex-col justify-end items-center pb-30 gap-10">
                        <img
                            src="/src/assets/home/navbar_fb.png"
                            className="w-3"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="/src/assets/home/navbar_yt.png"
                            className="w-5"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="/src/assets/home/navbar_x.png"
                            className="w-5"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="/src/assets/home/navbar_inst.png"
                            className="w-5"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div className="relative h-screen w-full pt-10 flex flex-col justify-between items-center">
                        {/* barre de navigation */}
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
                                <h4 className="text-white text-xl font-semibold bg-[#4097FF] px-10 py-2 rounded-2xl">
                                    Réservé
                                </h4>
                            </div>
                            <div className="w-20 h-18 flex flex-col justify-center items-center gap-2 ms-7">
                                <div className="w-full border-2 border-white rounded-xl"></div>
                                <div className="w-full border-2 border-white rounded-xl"></div>
                                <div className="w-[80%] border-2 border-white rounded-xl ms-auto"></div>
                            </div>
                        </div>
                        {/* contenu */}
                        <div className="w-[80%] h-full flex flex-col justify-center">
                            <div className="w-[40%] flex flex-col justify-center">
                                <h2 className="text-white text-6xl font-bold">
                                    Votre évasion
                                </h2>
                                <h2 className="text-white text-6xl font-normal p-2">
                                    sur la Côte d’Azur !
                                </h2>
                                <p className="text-white p-4">
                                    Blu Azur vous invite à découvrir le charme
                                    de Saint-Raphaël, une destination
                                    d’exception nichée entre Cannes et
                                    Saint-Tropez. Nos appartements tout équipés,
                                    situés dans un domaine privé sécurisé,
                                    offrent un cadre verdoyant et paisible, à
                                    quelques pas de la marina de Santa Lucia,
                                    des plages de sable fin et du centre-ville
                                    animé. Profitez d’un séjour alliant confort,
                                    sérénité et élégance au cœur de la Riviera
                                    française!
                                </p>
                                <div className="h-15 mt-30 ms-4 border-2 border-white rounded-full text-2xl text-white flex justify-center items-center gap-30">
                                    <h4 className="text-lg font-bold">
                                        Réservez dès maintenant votre séjour !
                                    </h4>
                                    <div className="w-7 h-7 border-2 border-white rounded-full  text-white text-sm font-bold flex justify-center items-center">
                                        {">"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
