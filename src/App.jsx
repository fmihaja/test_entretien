function App() {
    return (
        <>
            <div className="w-screen h-screen bg-[url('/src/assets/location/bgImg.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
                <h3 className="text-white text-5xl mb-2">
                    Saint Raphaël, l’endroit parfait pour
                </h3>
                <h3 className="text-white text-5xl font-bold mb-5">
                    vivre la Côte d’Azur
                </h3>
                <p className="w-[41%] text-center text-white mb-10">
                    Avec ses plages dorées, ses 300 jours de soleil et ses
                    calanques sauvages, Saint-Raphaël est une destination de
                    rêve. Entre mer turquoise et rochers rouges de l’Estérel,
                    elle offre un cadre idyllique pour la détente et l’aventure.
                </p>
                {/* contenu en card */}
                <div className="w-full flex  justify-center items-center gap-40 my-20">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/swim.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Sports nautiques, plongée, voile
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/ride.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Randonnées et vélo
                            <br />
                            dans l’Estérel
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/casino.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Casino <br />
                            et vie
                            <br />
                            nocturne animée
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/village.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Villages perchés et
                            <br />
                            marchés provençaux
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/golf.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Un paradis pour les golfeurs
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="w-30 h-30 rounded-full bg-white flex justify-center items-center">
                            <img
                                src="/src/assets/location/mountains.png"
                                className="w-1/2 h-auto"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-white text-center w-25 h-50">
                            Montagne et vélo de route
                        </p>
                    </div>
                </div>
                <p className="text-white text-center w-1/2">
                    Flânez sur la Promenade des Bains, explorez les criques
                    secrètes ou partez en mer depuis son port de plaisance.
                    Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur
                    !
                </p>
            </div>
        </>
    );
}

export default App;
