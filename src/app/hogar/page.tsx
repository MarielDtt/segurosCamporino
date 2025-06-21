import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Hogar - Cotizá online con Seguros Camporino",
  description: "Protegé tu casa y tus pertenencias con un seguro de hogar adaptado a vos. Cotizá online en minutos con atención personalizada.",
};
const Hogar = () => {

    return (
        <div className="p-8  bg-Background-Default h-auto">
           {/* <div className="flex-col">
                <h1 className="text-primary-600 text-title2">SEGURO INTEGRAL DE HOGAR</h1>
                <h3 className="text-subtitle1 text-primary-500">Protegé tus grandes logros con la cuota más baja.</h3>
                <ul>
                    <li> Incendio del edificio </li>
                    <li> Robo y/o hurto del contenido general </li>
                    <li> Electrodomésticos en el hogar </li>
                    <li> Cristales </li>
                    <li> Daños por agua </li>
                    <li> Daños climáticos </li>
                </ul>
                <p>...y mucho más. Elegí la cobertura a la medida de tus necesidades.</p>
            </div>
            <div className="">
                <Image
                    src="/family-home.jpg"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>*/}
            <Construccion/>
        </div>
    )
}

export default Hogar;