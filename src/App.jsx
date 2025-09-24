import Discovery from "./pages/Discovery";

function App() {
    return (
        <>
            <div className="w-screen h-screen relative flex justify-center items-center bg-[url('/src/assets/activity/bgImg.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-[80%] h-[90%] text-white flex flex-wrap justify-center items-center gap-6">
                    <div className="w-[48%] h-[40%] rounded-4xl  bg-[url('/src/assets/activity/img_1.png')] bg-center bg-cover bg-no-repeat  flex flex-col justify-end items-center">
                        <div className="h-[60%] w-[80%] flex flex-col justify-start items-start pb-10 gap-2">
                            <h5 className="font-bold text-xl">
                                Un patrimoine culturel <br /> d’exception
                            </h5>
                            <p className="text-sm">
                                De Picasso à Cocteau, la Côte d’Azur a toujours
                                été une terre d’inspiration pour les artistes.
                                Musées, galeries et sites historiques jalonnent
                                la région, offrant un voyage au cœur de l’art et
                                de l’histoire entre Saint-Raphaël, Antibes et
                                Saint-Paul-de-Vence.
                            </p>
                            {/* <h5 className="text-bold text-2xl"> </h5> */}
                            <p className="text-sm">
                                À voir:{" "}
                                <a href="" className="text-[#4097FF] underline">
                                    Le Festival de Cannes, Carnaval de Nice,
                                    Fête du Citron
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-[48%] h-[40%] rounded-4xl  bg-[url('/src/assets/activity/img_2.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center">
                        <div className="h-[60%] w-[80%] flex flex-col justify-start items-start pb-10 gap-2">
                            <h5 className="font-bold text-xl">
                                Le sport au rythme de la Méditerranée
                            </h5>
                            <p className="text-sm">
                                Du légendaire Grand Prix de Monaco aux défis de
                                l’Ironman, en passant par le Marathon des
                                Alpes-Maritimes, la région vibre au rythme des
                                grands événements sportifs. Cyclisme sur la
                                Route des Crêtes, golf sur des parcours
                                prestigieux et voile lors des Régates de
                                Saint-Tropez complètent ce décor idéal pour les
                                amateurs de sport et d’adrénaline.
                            </p>
                            {/* <h5 className="text-bold text-2xl"> </h5> */}
                            <p className="text-sm">
                                À voir:{" "}
                                <a href="" className="text-[#4097FF] underline">
                                    Grand prix de Monaco, Ironman France - Nice,
                                    Marathon des Alpes-Maritimes, Régates de
                                    Saint-Tropez
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-[31%] h-[55%]  rounded-4xl overflow-hidden flex flex-col justify-end items-center pb-10 gap-2 bg-[url('/src/assets/activity/img_3.png')] bg-center bg-cover bg-no-repeat">
                        <div className="h-[60%] w-[80%] flex flex-col justify-start items-start gap-2">
                            <h5 className="font-bold text-xl text-left">
                                Une destination gourmande et authentique
                            </h5>
                            <p className="text-sm">
                                Les marchés provençaux dévoilent des saveurs du
                                terroir, entre fromages affinés, huile d’olive
                                et spécialités méditerranéennes. Vignerons
                                passionnés et restaurants raffinés offrent une
                                expérience gastronomique où tradition et
                                créativité se rencontrent dans un cadre
                                enchanteur.
                            </p>
                            <div className="w-full border-2 p-3 border-[#4097FF] mt-3 rounded-full flex justify-center items-center gap-10">
                                <h4 className=" text-[#4097FF] text-xs font-bold">
                                    Consulter la liste des meilleurs restaurants
                                </h4>
                                <div className="w-7 h-7 border-2 border-[#4097FF] text-[#4097FF] rounded-full  text-xs font-bold flex justify-center items-center">
                                    {">"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[31%]  h-[55%]  rounded-4xl overflow-hidden flex flex-col justify-end items-center pb-10 gap-2 bg-[url('/src/assets/activity/img_4.png')] bg-center bg-cover bg-no-repeat">
                        <div className="h-[60%] w-[80%] flex flex-col justify-start items-start gap-2">
                            <h5 className="font-bold text-xl text-left ">
                                Des expériences inoubliables <br /> en famille
                            </h5>
                            <p className="text-sm">
                                Entre villages pittoresques, marchés publics
                                animés et escapades sur la route du littoral,
                                Saint-Raphaël propose un cadre idéal pour
                                partager des moments inoubliables. La diversité
                                des activités en plein air fait de la région une
                                destination prisée par les amateurs de
                                découvertes et d’aventures en famille.
                            </p>
                        </div>
                    </div>
                    <div className="w-[31%] h-[55%]  rounded-4xl overflow-hidden flex flex-col justify-end items-center pb-10 gap-2 bg-[url('/src/assets/activity/img_5.png')] bg-center bg-cover bg-no-repeat">
                        <div className="h-[60%] w-[80%] flex flex-col justify-start items-start gap-2">
                            <h5 className="font-bold text-xl text-left">
                                Une destination gourmande et authentique
                            </h5>
                            <p className="text-sm">
                                Les marchés provençaux dévoilent des saveurs du
                                terroir, entre fromages affinés, huile d’olive
                                et spécialités méditerranéennes. Vignerons
                                passionnés et restaurants raffinés offrent une
                                expérience gastronomique où tradition et
                                créativité se rencontrent dans un cadre
                                enchanteur.
                            </p>
                            <div className="w-full border-2 p-3 border-[#4097FF] mt-3 rounded-full flex justify-center items-center gap-10">
                                <h4 className=" text-[#4097FF] text-xs font-bold">
                                    Consulter la liste des meilleurs restaurants
                                </h4>
                                <div className="w-7 h-7 border-2 border-[#4097FF] text-[#4097FF] rounded-full  text-xs font-bold flex justify-center items-center">
                                    {">"}
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
