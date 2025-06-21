import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Sepelio - Tranquilidad para vos y tu familia | Seguros Camporino",
  description: "Contratá un seguro de sepelio que cubra los gastos del servicio. Planes accesibles, atención personalizada y sin trámites complicados.",
};

const Sepelio = () => {

     return (
            <div className="p-8  bg-Background-Default h-auto">
                {/*<div className="flex-col">
                    <h1 className="text-primary-600 text-title2">SEGURO DE SEPELIO</h1>
                    <h3 className="text-subtitle1 text-primary-500">Sentite acompañado en todo momento.</h3>
                    
                    <p>Ofrecemos planes cerrados o por reintegro, para que elijas la opción que mejor se adapte a vos y tu familia.</p>
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

export default Sepelio;