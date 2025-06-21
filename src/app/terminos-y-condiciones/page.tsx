'use client'
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Términos y Condiciones | Seguros Camporino",
  description: "Leé los términos y condiciones de uso del sitio de Seguros Camporino. Información legal sobre nuestros servicios y responsabilidades.",
};
const Terminos = () => {
    const router = useRouter();

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-title2 text-center">Términos y Condiciones de Uso</h1>
            <div>
                <p className="mt-4 text-subtitle1">
                    1. Aceptación de los Términos
                </p>
                <p className="text-body text-justify">
                    Al acceder y utilizar este sitio web, aceptás los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar nuestros servicios.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    2. Uso del Sitio
                </p>
                <p className="text-body text-justify">
                    <strong>Seguros Camporino</strong>  brinda información sobre seguros con fines orientativos. No vendemos seguros directamente ni gestionamos pólizas. Las decisiones tomadas a partir de la información publicada son responsabilidad del usuario.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    3. Contenido y Propiedad Intelectual

                </p>
                <p className="text-body text-justify">
                    Todos los textos, imágenes, logotipos y materiales presentes en este sitio son propiedad de <strong>Seguros Camporino o de sus respectivos titulares</strong>  y están protegidos por la legislación vigente. Su uso no autorizado está prohibido.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    4. Responsabilidad
                </p>
                <p className="text-body text-justify">
                    <strong>Seguros Camporino</strong> no se responsabiliza por errores u omisiones en los contenidos ni por decisiones tomadas por los usuarios basadas en la información aquí publicada. Tampoco garantiza la disponibilidad continua del sitio.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    5. Protección de Datos
                </p>
                <p className="text-body text-justify">
                    El tratamiento de datos personales se realiza conforme a la Política de Privacidad disponible en este mismo sitio.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    6. Enlaces Externos
                </p>
                <p className="text-body text-justify">
                    Este sitio puede incluir enlaces a otros sitios web. <strong>Seguros Camporino</strong> no se hace responsable por sus contenidos ni por el tratamiento de datos personales realizado en dichos sitios.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    7. Modificaciones
                </p>
                <p className="text-body text-justify">
                    <strong>Seguros Camporino</strong>  se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios se publicarán en esta misma sección y se considerarán vigentes desde su publicación.
                </p>
            </div>
            <div>
                <div>
                    <Button text="VOLVER" onClick={() => router.push('/')} />
                </div>
                <div>
                    <Button text="Politicas" onClick={() => router.push('/politicas-de-privacidad')} />
                </div>
            </div>
        </div>
    )
}

export default Terminos;