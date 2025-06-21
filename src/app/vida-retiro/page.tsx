import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Vida y Retiro - Pensá en tu futuro | Seguros Camporino",
  description: "Asegurá el bienestar de tu familia y planificá tu retiro con tranquilidad. Cotizá seguros de vida y retiro a medida, con respaldo y asesoramiento.",
};

const vida_retiro = () => {

    return (
        <div className="p-8  bg-Background-Default h-auto">
            {/*<div className="flex-col">
                <h1 className="text-primary-600 text-title2">SEGURO DE VIDA Y RETIRO</h1>
                <h3 className="text-subtitle1 text-primary-500">Ahorrá hoy, asegurá tu futuro.</h3>

                <p>Generá un respaldo que te permita vivir mejor en tu edad de retiro.</p>
                <p>Elegí el monto de tus aportes y planificá a tu medida.</p>
            </div>
            <div className="">
                <Image
                    src="/"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>*/}
            <Construccion/>
        </div>
    )
}

export default vida_retiro;