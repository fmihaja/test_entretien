

function Contact() {
    return (
        <>
            <div className="relative text-white -z-2 w-screen h-screen bg-[url('/src/assets/contact/bgImg.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center gap-5">
                <div className="absolute -z-1 inset-0 bg-gradient-to-br from-[#4097FF] to-[#73737300]"></div>
                <h2 className=" text-6xl font-normal p-2">Réservations</h2>
                <p className="text-center w-[60%] text-lg">
                    <span className="font-bold me-2">
                        Offrez-vous un séjour inoubliable
                    </span>
                    dans l’un de nos appartements Blu Azur. Profitez d’un cadre
                    exceptionnel, entre confort, détente et découvertes, au cœur
                    de Saint-Raphaël.
                </p>
                <div className="w-[25%] p-3 bg-[#4097FF] mt-3 rounded-full flex justify-center items-center gap-10">
                    <h4 className=" text-white text-xs font-bold">
                        Consulter la liste des meilleurs restaurants
                    </h4>
                    <div className="w-7 h-7 border-2 border-white text-white rounded-full  text-xs font-bold flex justify-center items-center">
                        {">"}
                    </div>
                </div>
                <div className="absolute -bottom-50 w-full bg-[#4097FF] h-[30%] flex-col justify-between items-center">
                    <div className="h-full flex justify-center items-center gap-50">
                        <img
                            src="/src/assets/home/logo_azur.png"
                            alt=""
                            srcset=""
                            className="w-[15%]"
                        />
                        <div className="flex flex-col justify-between gap-3">
                            <h4 className="text-xl mb-3">Contactez-nous</h4>
                            <span className="flex justify-start items-center text-sm gap-3">
                                <img
                                    src="/src/assets/contact/img_1.png"
                                    className="w-5 h-5"
                                    alt=""
                                />
                                info@bluazur.com
                            </span>
                            <span className="flex justify-start items-center text-sm gap-3">
                                <img
                                    src="/src/assets/contact/img_2.png"
                                    className="w-5 h-5"
                                    alt=""
                                />
                                +1 555 555-5555
                            </span>
                            <span className="flex justify-start items-center text-sm gap-3">
                                <img
                                    src="/src/assets/contact/img_3.png"
                                    className="w-5 h-5"
                                    alt=""
                                />
                                @ BLU Azur
                            </span>
                        </div>
                    </div>
                    <div className="z-1 w-full h-20  bg-black/75 flex justify-center items-center">
                        <span>© Tous droits réservés à Blu Azur</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
