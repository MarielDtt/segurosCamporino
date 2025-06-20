import Construccion from "@/components/construccion";
import Image from "next/image";

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