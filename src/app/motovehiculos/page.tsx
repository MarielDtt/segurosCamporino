import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro para Motos - Cotizá en minutos | Seguros Camporino",
  description: "Protegé tu moto con coberturas contra robo, accidentes y responsabilidad civil. Cotizá online de forma rápida y segura.",
};

const Motovehiculos = () => {

    return (
            <div className="p-8  bg-Background-Default h-auto">
                {/*<div className="flex-col">
                    <h1 className="text-primary-600 text-title2">SEGURO MOTOVEHICULOS</h1>
                    <h3 className="text-subtitle1 text-primary-500">Sabemos lo que tu moto significa para vos.</h3>
                    <ul>
                        <li> Responsabilidad civil </li>
                        <li> Robo e incendio total y parcial </li>
                    </ul>
                    <p>Elegí la cobertura que mejor se adapte a tu estilo de vida y necesidades.</p>
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

export default Motovehiculos;