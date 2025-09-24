function Discovery() {
    return (
        <>
            <div className="w-screen h-screen relative bg-[url('/src/assets/discovery/bgImg.png')] bg-center bg-cover bg-no-repeat flex justify-end items-center">
                {/* contenu principal */}
                <div className="w-[50%] flex flex-col justify-start text-white">
                    <h3 className="text-5xl mb-2 w-[75%] text-end">
                        Un point de départ idéal
                    </h3>
                    <h3 className="w-[75%] text-5xl mb-5 text-end">
                        pour{" "}
                        <span className="font-bold">
                            découvrir la Côte d’Azur !
                        </span>
                    </h3>
                    <p className="w-[75%] mb-10 text-justify ps-10">
                        Entre mer et montagne, Saint-Raphaël est une destination
                        idéale pour les amateurs de plein air et de découvertes.
                        Randonnées dans le Massif de l’Estérel, sports nautiques
                        sur les eaux cristallines de la Méditerranée, balades en
                        bateau vers les îles de Lérins ou encore golf et
                        cyclisme sur des parcours panoramiques, chaque journée
                        offre son lot d’aventures. Entre marchés provençaux,
                        villages perchés et animations locales, l’art de vivre
                        azuréen se dévoile à chaque instant, faisant de
                        Saint-Raphaël un lieu vibrant et inoubliable. 
                    </p>
                </div>
                {/* carousel img */}
                <div className="absolute bottom-[15%] left-1 w-[50%] h-[70%]  flex justify-center items-center gap-3 overflow-hidden">
                    <div className="relative w-[50%] h-auto rounded-2xl">
                        <img
                            src="/src/assets/discovery/img_1.png"
                            className="w-[90%] h-auto"
                            alt=""
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discovery;
