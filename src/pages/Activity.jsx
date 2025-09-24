import CardActivity from "../components/activity/CardActivity";
import Button from "../components/Button";
import ButtonNext from "../components/ButtonNext";

function Activity() {
    return (
        <>
            <div className="w-screen h-screen relative flex justify-center items-center bg-[url('/src/assets/activity/bgImg.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-[80%] h-[90%] text-white flex flex-wrap justify-center items-center gap-6">
                    <CardActivity
                        title={"Un patrimoine culturel" + "\n" + "d’exception"}
                        desc="                                De Picasso à Cocteau, la Côte d’Azur a toujours
                                été une terre d’inspiration pour les artistes.
                                Musées, galeries et sites historiques jalonnent
                                la région, offrant un voyage au cœur de l’art et
                                de l’histoire entre Saint-Raphaël, Antibes et
                                Saint-Paul-de-Vence."
                        srcImg="img_1"
                        vertical={false}
                    >
                        <p className="text-sm mt-5">
                            À voir:{" "}
                            <a href="" className="text-[#4097FF] underline">
                                Le Festival de Cannes, Carnaval de Nice, Fête du
                                Citron
                            </a>
                        </p>
                    </CardActivity>
                    <CardActivity
                        title={"Le sport au rythme de la Méditerranée"}
                        desc="                                Du légendaire Grand Prix de Monaco aux défis de
                                l’Ironman, en passant par le Marathon des
                                Alpes-Maritimes, la région vibre au rythme des
                                grands événements sportifs. Cyclisme sur la
                                Route des Crêtes, golf sur des parcours
                                prestigieux et voile lors des Régates de
                                Saint-Tropez complètent ce décor idéal pour les
                                amateurs de sport et d’adrénaline."
                        srcImg="img_2"
                        vertical={false}
                    >
                        <p className="text-sm mt-5">
                            À voir:{" "}
                            <a href="" className="text-[#4097FF] underline">
                                Grand prix de Monaco, Ironman France - Nice,
                                Marathon des Alpes-Maritimes, Régates de
                                Saint-Tropez
                            </a>
                        </p>
                    </CardActivity>
                    <CardActivity
                        title={"Une destination gourmande et authentique"}
                        desc="                                 Les marchés provençaux dévoilent des saveurs du
                                terroir, entre fromages affinés, huile d’olive
                                et spécialités méditerranéennes. Vignerons
                                passionnés et restaurants raffinés offrent une
                                expérience gastronomique où tradition et
                                créativité se rencontrent dans un cadre
                                enchanteur."
                        srcImg="img_3"
                        vertical={true}
                    >
                        <Button width="100%" borderColor={"#4097FF"}>
                            <h4 className=" text-[#4097FF] text-xs font-bold">
                                Consulter la liste des meilleurs restaurants
                            </h4>
                            <ButtonNext size={7} color={"#4097FF"} />
                        </Button>
                    </CardActivity>
                    <CardActivity
                        title={
                            "Des expériences inoubliables" + "\n" + "en famille"
                        }
                        desc="                                Entre villages pittoresques, marchés publics
                                animés et escapades sur la route du littoral,
                                Saint-Raphaël propose un cadre idéal pour
                                partager des moments inoubliables. La diversité
                                des activités en plein air fait de la région une
                                destination prisée par les amateurs de
                                découvertes et d’aventures en famille."
                        srcImg="img_4"
                        vertical={true}
                    />
                    <CardActivity
                        title={"L’évasion en pleine nature"}
                        desc="Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps."
                        srcImg="img_5"
                        vertical={true}
                    >
                        <p className="text-sm my-2">
                            À voir: Grand Canyon du Verdon
                        </p>
                        <Button width="100%" borderColor={"#4097FF"}>
                            <h4 className=" text-[#4097FF] text-xs font-bold">
                                Consulter la liste des sentiers pédestres
                            </h4>
                            <ButtonNext size={7} color={"#4097FF"} />
                        </Button>
                    </CardActivity>
                </div>
            </div>
        </>
    );
}

export default Activity;
