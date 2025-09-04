import AccidentesHero from "./accidentesHero";

export const metadata = {
    title: "Seguro de Accidentes Personales - Seguros Camporino",
    description: "Cotizá tu seguro de accidentes personales en minutos. Protección ante imprevistos para trabajadores, monotributistas y actividades independientes.",
};
const Accidentes = () => {

    return (
        <div className="p-8 bg-Background-Default h-auto">
            <AccidentesHero />

            <div className="mt-20">
                <p className="text-center text-title3 sm:text-title1 ">¿Por qué contratar un seguro de Accidentes Personales?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto mt-8 px-4">

                {/* CARD 1 */}
                <div className="w-full sm:col-span-1 bg-secondary-500 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Protección estés donde estés
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Ya sea en el trabajo, en tu casa o en la calle, estás cubierto ante cualquier accidente personal.
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="w-full sm:col-span-2 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Contratalo online, sin demoras
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Completás la solicitud 100% online, sin trámites ni demoras. Nuestros asesores están disponibles para ayudarte en cada paso. Si tenés dudas, podés comunicarte cuando lo necesites.
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="w-full sm:col-span-2 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Tranquilidad para vos y tu familia
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Contar con un seguro de accidentes personales no solo te protege a vos, sino que también le da calma a tu entorno. Saber que tenés respaldo en situaciones inesperadas brinda seguridad emocional y económica.
                    </p>
                </div>

                {/* CARD 4 */}
                <div className="w-full sm:col-span-1 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Respaldo económico
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Si sufrís un accidente y no podés trabajar, accedés a una compensación rápida para cubrir tus gastos.
                    </p>
                </div>

            </div>
        </div>
    )

}

export default Accidentes;