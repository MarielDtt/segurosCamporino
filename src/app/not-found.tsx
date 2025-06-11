'use client'
import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFound() {
    const router = useRouter();
    const whatsappLink = "https://wa.me/5491166603916?text=Hola%2C%20quiero%20cotizar%20un%20seguro";


    return (
        <div className="bg-Background-Default h-screen">
            <h1 className="text-title1 text-center m-auto text-primary-600 mt-8">Esta página no está asegurada 😅</h1>
            <div className="flex justify-center m-auto">
                <Image
                    src="/auto.png"
                    width={340}
                    height={340}
                    alt="Auto"
                />
            </div>
            <p className="text-body italic m-8 text-primary-600">Parece que tomaste un desvío. Volvamos a la ruta segura o hablá con un asesor para encontrar lo que necesitás.</p>
            <div>
                <div>
                    <Button text="INICIO" onClick={() => router.push('/')} />
                </div>
                <div>
                    <Button text="CONTACTO" onClick={() => window.open(whatsappLink, "_blank")}  />
                </div>
            </div>
        </div>


    )
}

export default NotFound;
