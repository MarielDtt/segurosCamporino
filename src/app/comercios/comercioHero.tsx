'use client'
import { Button } from "@/components/button";
import Image from "next/image";

const ComercioHero = () => {
    const whatsappLink = "https://wa.me/5491161076870?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20de%20comercio";

    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row p-8 space-x-0 lg:space-x-12 bg-Background-Lilac">
            {/* CONTENIDO TEXTO */}
            <div className="flex-1 space-y-4">
                <h1 className="text-primary-600 text-title2">SEGURO INTEGRAL DE COMERCIO</h1>
                <h3 className="text-subtitle1 text-primary-500">
                    Protegé tu fuente de ingresos frente a cualquier imprevisto.
                </h3>
                <ul className="list-disc pl-5">
                    <li>Incendio del edificio</li>
                    <li>Incendio contenido general</li>
                    <li>Responsabilidad Civil Comprensiva</li>
                    <li>Cristales</li>
                    <li>Robo</li>
                    <li>Valores en caja</li>
                    <li>Daños por agua</li>
                </ul>
                <p>...y más coberturas a medida según tu tipo de negocio.</p>
                <Button text="¡Cotizá ahora!" className="w-[140px] h-[44px] sm:w-[180px] sm:h-[60px]" onClick={() => window.open(whatsappLink, "_blank")} />
            </div>

            {/* IMAGEN */}
            <div className="flex-1 flex justify-center  items-start">
                <Image src="/Comercio.webp" alt="Seguro para comercio" width={500} height={500} className="rounded-xl" />
            </div>
        </div>
    )

}

export default ComercioHero;