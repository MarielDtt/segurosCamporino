import Construccion from "@/components/construccion";
import Image from "next/image";
const Comercios = () => {

    return (
        <div className="p-8  bg-Background-Default h-auto">
            {/*<div className="flex-col">
                <h1 className="text-primary-600 text-title2">SEGURO INTEGRAL DE COMERCIO</h1>
                <h3 className="text-subtitle1 text-primary-500">Protegé tu fuente de ingresos frente a cualquier imprevisto.</h3>
                <ul>
                    <li> Incendio del edificio </li>
                    <li> Incendio contenido general </li>
                    <li> Responsabilidad Civil Comprensiva </li>
                    <li> Cristales </li>
                    <li> Robo </li>
                    <li> Valores en caja </li>
                    <li> Daños por agua </li>
                </ul>
                <p>...y más coberturas a medida según tu tipo de negocio.</p>
            </div>
            <div className="">
                <Image
                    src="/Comercio.png"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>*/}
            <Construccion/>
        </div>
    )
}

export default Comercios;