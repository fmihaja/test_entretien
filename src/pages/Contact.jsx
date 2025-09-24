import Button from "../components/Button";
import ButtonNext from "../components/ButtonNext";

function Contact() {
    return (
        <div className="relative min-h-screen text-white bg-[url('/src/assets/contact/bgImg.png')] bg-center bg-cover bg-no-repeat flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4097FF] to-[#73737300]"></div>

            <div className="relative z-10 flex-1 flex flex-col justify-center items-center gap-5 px-4">
                <h2 className="text-6xl font-normal p-2 text-center">
                    Réservations
                </h2>
                <p className="text-center w-full md:w-[60%] text-lg">
                    <span className="font-bold me-2">
                        Offrez-vous un séjour inoubliable
                    </span>
                    dans l'un de nos appartements Blu Azur. Profitez d'un cadre
                    exceptionnel, entre confort, détente et découvertes, au cœur
                    de Saint-Raphaël.
                </p>
                <Button bgColor={"#4097FF"} width={"25%"}>
                    <h4 className="text-white text-sm font-bold">
                        Consulter la liste des meilleurs restaurants
                    </h4>
                    <ButtonNext size={7} color={"#FFFFFF"} />
                </Button>
            </div>

            <div className="relative z-10 w-full bg-[#4097FF] py-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-50">
                    <img
                        src="/src/assets/home/logo_azur.png"
                        alt="Logo Blu Azur"
                        className="w-1/2 md:w-[15%] max-w-[200px]"
                    />
                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <h4 className="text-xl mb-3">Contactez-nous</h4>
                        <span className="flex justify-center md:justify-start items-center text-sm gap-3">
                            <img
                                src="/src/assets/contact/img_1.png"
                                className="w-5 h-5"
                                alt="Email"
                            />
                            info@bluazur.com
                        </span>
                        <span className="flex justify-center md:justify-start items-center text-sm gap-3">
                            <img
                                src="/src/assets/contact/img_2.png"
                                className="w-5 h-5"
                                alt="Téléphone"
                            />
                            +1 555 555-5555
                        </span>
                        <span className="flex justify-center md:justify-start items-center text-sm gap-3">
                            <img
                                src="/src/assets/contact/img_3.png"
                                className="w-5 h-5"
                                alt="Réseaux sociaux"
                            />
                            @ BLU Azur
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full h-20 bg-black/75 flex justify-center items-center text-white">
                <span>© Tous droits réservés à Blu Azur</span>
            </div>
        </div>
    );
}

export default Contact;
