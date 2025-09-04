'use client'
import { Button } from "@/components/button";
import Image from "next/image";

const RCProfesionalHero = () => {
    const whatsappLink = "https://wa.me/5491161076870?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20de%20accidentes%20personales";

    return (
        <div className="w-full aspect-[16/12] sm:aspect-[16/6] relative m-auto rounded-2xl overflow-hidden ">

            <Image
                src="/RC-Profesional.webp"
                alt="Responsabilidad Civil para Profesionales"
                fill
                className=" "
            />
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className=" pt-8 sm:pt-0 absolute inset-y-0 left-6 sm:left-4 flex flex-col justify-center items-start z-10">
                <p className="text-white text-subtitle1 sm:text-display2 font-bold">RESPONSABILIDAD CIVIL PARA PROFESIONALES</p>
                <p className="text-white text-caption sm:text-subtitle1 mt-2 ">Asegura tu actividad Profesional de la mejor Manera</p>
                <div className=" mt-2 pb-2">
                    <Button text="¡Cotizá ahora!" className="w-[140px] h-[44px] sm:w-[180px] sm:h-[60px]" onClick={() => window.open(whatsappLink, "_blank")} />
                </div>
            </div>
        </div>
    )

}

export default RCProfesionalHero;