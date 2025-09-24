import Button from "../components/Button";
import ButtonNext from "../components/ButtonNext";

function GMap() {
    return (
        <>
            <div className="w-screen h-screen relative bg-[url('/src/assets/googleMaps/bgImg.png')] bg-center bg-cover bg-no-repeat flex justify-center items-center">
                {/* contenu principal */}
                <div className="w-[80%] flex flex-col justify-start">
                    <h3 className="text-5xl mb-2">Où se trouve Blu Azur à</h3>
                    <h3 className="text-5xl font-bold mb-5">Saint-Raphaël ?</h3>
                    <p className="w-[41%] mb-10 ">
                        <span className="font-bold">
                            Blu Azur est idéalement situé entre Saint-Tropez et
                            Cannes, au cœur de l’une des plus belles stations
                            balnéaires de France.
                        </span>{" "}
                        Nos appartements se trouvent dans un domaine privé
                        sécurisé, entouré de verdure, à quelques minutes à pied
                        de la plage sablonneuse de Santa Lucia et de la marina.
                        Proche du centre-ville de Saint-Raphaël, la résidence
                        permet un accès facile aux boutiques, restaurants et
                        animations locales. Une station d’arrêt d’autobus est
                        située à la sortie du site, facilitant les déplacements,
                        et une boulangerie à proximité vous offre du pain frais
                        chaque matin pour bien commencer la journée.
                    </p>
                    <Button width={"25%"} borderColor={"#4097FF"}>
                        <h4 className=" text-[#4097FF] text-lg font-bold">
                            Comment s’y rendre ?
                        </h4>
                        <ButtonNext size={7} color={"#4097FF"} />
                    </Button>
                    {/* <div className="w-[25%] border-2 p-3 border-[#4097FF] mt-3 rounded-full flex justify-center items-center gap-30">
                        <h4 className=" text-[#4097FF] text-lg font-bold">
                            Comment s’y rendre ?
                        </h4>
                        <div className="w-7 h-7 border-2 border-[#4097FF] text-[#4097FF] rounded-full  text-sm font-bold flex justify-center items-center">
                            {">"}
                        </div>
                    </div> */}
                </div>
                {/* carousel img */}
                <div className="absolute bottom-[15%] right-1 w-[50%] h-[70%]  flex justify-center items-center gap-3 overflow-hidden">
                    <div className="relative w-[50%] h-auto rounded-2xl">
                        <img
                            src="/src/assets/googleMaps/img_1.png"
                            className="w-[90%] h-auto"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="/src/assets/googleMaps/img_2.png"
                            alt=""
                            srcset=""
                            className="absolute -top-10 -left-10 w-20 h-auto"
                        />
                        <img
                            src="/src/assets/googleMaps/img_3.png"
                            alt=""
                            srcset=""
                            className="absolute top-[30%] left-1/2 w-20 h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GMap;
