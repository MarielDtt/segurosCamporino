import Construccion from "@/components/construccion";
import Image from "next/image";

const Mascotas = () => {

    return (
            <div className="p-8  bg-Background-Default h-auto">
               {/* <div className="flex-col">
                    <h1 className="text-primary-600 text-title2">SEGURO DE MASCOTAS</h1>
                    <h3 className="text-subtitle1 text-primary-500">Una cobertura integral para los más divertidos de la casa.</h3>
                    <ul>
                        <li> Robo </li>
                        <li> Muerte por accidente o enfermedad </li>
                        <li> Gastos veterinarios por accidente o enfermedad </li>
                        <li> Gastos por extravío </li>
                    </ul>
                    <p>...y mucho más. Elegí la cobertura a la medida de tus necesidades.</p>
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

export default Mascotas;