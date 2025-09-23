function App() {
    return (
        <>
            <div className="w-screen h-screen relative flex justify-center items-center">
                {/* contenu principal */}
                <div className="w-[80%] flex flex-col justify-start">
                    <h3 className="text-5xl mb-2">
                        Le confort et la sérénité d’un
                    </h3>
                    <h3 className="text-5xl font-bold mb-5">
                        appartement privé
                    </h3>
                    <p className="w-[41%] mb-10">
                        Blu Azur vous propose des appartements élégants et
                        spacieux, conçus pour accueillir de 2 à 6 personnes.
                        Offrant un cadre confortable et moderne, ils sont
                        parfaits pour une escapade détente ou un séjour
                        prolongé.
                    </p>
                    <h4 className="text-3xl mb-3">Les inclusions :</h4>
                    <ul className="list-disc pl-6 marker:text-[#4097FF] marker:text-2xl">
                        <li>Stationnement privé</li>
                        <li>Piscine extérieure avec chaises longues</li>
                        <li>Linge de lit et serviettes</li>
                        <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
                        <li>
                            Réfrigérateur, cuisinière, lave-vaisselle, vaisselle
                        </li>
                        <li>
                            Kit bébé: comprend un lit parapluie avec un vrai
                            matelas et une chaise haute
                        </li>
                        <li className="w-[41%]">
                            Autres commodités en prêt à la réception: jeux de
                            société, livres, raquettes et balles de ping-pong,
                            sèche-cheveux, fer et planche à repasser, adaptateur
                            pour les prises étrangères et cache-prises pour les
                            enfants.
                        </li>
                    </ul>
                </div>
                <div className="absolute bottom-[15%] right-1 w-[50%] h-[70%]  flex justify-end items-center gap-3 overflow-hidden">
                    <img
                        src="/src/assets/comfort/img_1.png"
                        className="w-[50%] h-auto rounded-2xl overflow-hidden"
                        alt=""
                        srcset=""
                    />
                    <div className="w-[40%] relative h-full flex justify-center items-center">
                        <img
                            src="/src/assets/comfort/img_2.png"
                            className="w-full h-auto"
                            alt=""
                            srcset=""
                        />
                        <div className="absolute bottom-[50%] right-[30%] w-7 h-7 border-2 border-white rounded-full  text-white text-sm font-bold flex justify-center items-center">
                            {">"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
