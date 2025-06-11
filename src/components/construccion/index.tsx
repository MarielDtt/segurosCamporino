'use client'
import { Button } from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Construccion() {
    const router = useRouter();

    return (
        <div className="bg-Background-Default h-screen fixed inset-0 z-50">
            <h1 className="text-title1 text-center m-auto text-primary-600 mt-8">Estamos trabajando para asegurar tu camino 😅</h1>
            <div className="flex justify-center m-auto">
                <Image
                    src="/Construccion.png"
                    width={340}
                    height={340}
                    alt="Auto"
                />
            </div>
            <p className="text-body italic m-8 text-primary-600">Muy pronto vas a poder recorrer esta sección sin desvíos. Gracias por tu paciencia.</p>
            <div>
                <div>
                    <Button text="INICIO" onClick={() => router.push('/')} />
                </div>
            </div>
        </div>


    )
}

export default Construccion;
