import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro de Responsabilidad Civil Profesional | Seguros Camporino",
  description: "Protegé tu actividad profesional frente a reclamos o daños a terceros. Ideal para médicos, abogados, arquitectos y más. Cotizá online.",
};


const Rc_Profesional = () => {

      return (
           <div className="p-8  bg-Background-Default h-auto">
               {/*<div className="flex-col">
                   <h1 className="text-primary-600 text-title2">RESPONSABILIDAD CIVIL PROFESIONAL</h1>
                   <h3 className="text-subtitle1 text-primary-500">Tu actividad profesional, protegida de la mejor manera.</h3>
                  
                   <p>Asegurá tu patrimonio frente a posibles reclamos de terceros derivados del ejercicio de tu profesión.</p>
               </div>
               <div className="">
                   <Image
                       src="/Rc_Profecional.png"
                       alt=""
                       width={500}
                       height={500}
                   />
               </div>*/}
               <Construccion/>
   
           </div>
      )
}

export default Rc_Profesional;