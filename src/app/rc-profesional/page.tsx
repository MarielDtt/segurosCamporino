
import RCProfesionalHero from "./rcProfesionalHero";

export const metadata = {
    title: "Seguro de Responsabilidad Civil Profesional | Seguros Camporino",
    description: "Protegé tu actividad profesional frente a reclamos o daños a terceros. Ideal para médicos, abogados, arquitectos y más. Cotizá online.",
};


const Rc_Profesional = () => {

    return (
        <div className="p-8 bg-Background-Default h-auto">
            <RCProfesionalHero />

            <div className="mt-20">
                <p className="text-center text-title3 sm:text-title1 ">¡Protegé tu patrimonio con el Seguro de Responsabilidad Civil Profesional!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto mt-8 px-4">

                {/* CARD 1 */}
                <div className="w-full sm:col-span-1 bg-secondary-500 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        ¿Qué es la Responsabilidad Civil Profesional?
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Te protege ante reclamos de terceros por daños causados en el ejercicio de tu profesión.
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="w-full sm:col-span-2 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Contratalo online, sin demoras
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Contratalo 100% online, con respaldo personalizado
                        Gestionás todo de forma digital y rápida, con el acompañamiento de nuestros asesores especializados en seguros profesionales.
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="w-full sm:col-span-2 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        ¿Quiénes pueden asegurarse?
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        <ul className="list-disc pl-6">
                            <li> Profesionales con título universitario y matriculación correspondiente.</li>
                            <li>Técnicos y auxiliares de la medicina.</li>
                            <li>Otras profesiones como martilleros, corredores inmobiliarios, docentes, agrimensores, maestros mayores de obras, técnicos, despachantes de aduana, asistentes/trabajadores sociales, licenciados en seguridad e higiene, etc.</li>
                        </ul>
                    </p>
                </div>

                {/* CARD 4 */}
                <div className="w-full sm:col-span-1 bg-primary-800 text-white min-h-[220px] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                    <p className="text-title1 sm:text-title2 font-bold text-white">
                        Cobertura ante reclamos legales
                    </p>
                    <p className="text-body text-white mt-2 leading-snug sm:text-signal">
                        Ante un reclamo legal, este seguro cubre los gastos derivados del proceso judicial, defensa y posibles indemnizaciones.
                    </p>
                </div>

            </div>
        </div>
    )

}

export default Rc_Profesional;