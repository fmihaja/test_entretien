import LocationCard from "../components/location/LocationCard";

function Location() {
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
                <div className="w-full flex  justify-center items-center flex-wrap gap-40 my-20">
                    <LocationCard
                        srcImg="swim"
                        desc="Sports nautiques, plongée, voile"
                    />
                    <LocationCard
                        srcImg="ride"
                        desc={" Randonnées et vélo" + "\n" + "dans l’Estérel"}
                    />
                    <LocationCard
                        srcImg="casino"
                        desc={
                            "Casino " +
                            "\n" +
                            "et vie" +
                            "\n" +
                            "nocturne animée"
                        }
                    />
                    <LocationCard
                        srcImg="village"
                        desc={
                            " Villages perchés et" + "\n" + "marchés provençaux"
                        }
                    />
                    <LocationCard
                        srcImg="golf"
                        desc="Un paradis pour les golfeurs"
                    />
                    <LocationCard
                        srcImg="mountains"
                        desc="Montagne et vélo de route"
                    />
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

export default Location;
