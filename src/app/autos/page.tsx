import Construccion from "@/components/construccion";
import Image from "next/image";

const Autos = () => {

    return (
        <div className="p-8  bg-Background-Default h-auto">
            {/*<div className="flex-col">
                  <h1 className="text-primary-600 text-title2">SEGURO AUTOMOTOR</h1>
                  <h3 className="text-subtitle1 text-primary-500">Viajá tranquilo, con la más amplia variedad de coberturas.</h3>
                  <ul>
                      <li> Responsabilidad Civil </li>
                      <li> Daños totales </li>
                      <li> Terceros completo </li>
                      <li> Todo riesgo con franquicia </li>
                      <li> Asistencia mecánica las 24 hs. </li>
      
                  </ul>
              </div>
              <div className="">
                  <Image
                      src="/"
                      alt=""
                      width={500}
                      height={500}
                  />
              </div>*/}
            <Construccion />

        </div>
    )
}

export default Autos;