'use client'
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Política de Privacidad | Seguros Camporino",
  description: "Conocé cómo protegemos tus datos personales en Seguros Camporino. Transparencia y compromiso con tu privacidad.",
};

const Politicas = () => {
    const router = useRouter();

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-title2 text-center">Política de Privacidad</h1>
            <div>
                <p className="mt-4 text-subtitle1">
                    1. Responsable del Tratamiento de Datos Personales
                </p>
                <p className="text-body text-justify">
                    Este sitio web es gestionado por <strong>Seguros Camporino</strong>, una plataforma online de difusión y contacto con fines informativos y de consulta sobre seguros. No poseemos atención presencial ni oficinas físicas. Para cualquier consulta, podés escribirnos a <strong>seguroscamporino@hotmail.com</strong>
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    2. Finalidad del Tratamiento
                </p>
                <p className="text-body text-justify">
                    Los datos personales proporcionados serán utilizados para:
                </p>
                <ul className="list-disc pl-6 text-body text-justify">
                    <li> Gestionar solicitudes de cotización de seguros. </li>
                    <li> Brindar información sobre productos y servicios. </li>
                    <li> Enviar comunicaciones relacionadas con la actividad aseguradora. </li>
                </ul>
            </div>

            <div>
                <p className="mt-4 text-subtitle1">
                    3. Base Legal
                </p>
                <p className="text-body text-justify">
                    El tratamiento de datos se basa en el consentimiento del titular y en el cumplimiento de obligaciones legales conforme a la Ley 25.326.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    4. Destinatarios de los Datos
                </p>
                <p className="text-body text-justify">
                    Los datos podrán ser compartidos con:
                    Productores asesores de seguros vinculados.
                    Empresas del mismo grupo empresarial.
                    Autoridades competentes cuando sea requerido por ley.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    5. Derechos del Titular de los Datos
                </p>
                <p className="text-body text-justify">
                    El titular puede ejercer los derechos de acceso, rectificación, actualización y supresión de sus datos enviando una solicitud a <strong>seguroscamporino@hotmail.com</strong>
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    6. Medidas de Seguridad
                </p>
                <p className="text-body text-justify">
                    Se implementan medidas técnicas y organizativas para garantizar la seguridad y confidencialidad de los datos personales.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    7. Uso de Cookies

                </p>
                <p className="text-body text-justify">
                    Este sitio web utiliza cookies para mejorar la experiencia del usuario. Puede configurar su navegador para rechazarlas o eliminarlas.
                </p>
            </div>
            <div>
                <p className="mt-4 text-subtitle1">
                    8. Modificaciones a la Política de Privacidad

                </p>
                <p className="text-body text-justify">
                    Nos reservamos el derecho de modificar esta política. Los cambios serán publicados en esta misma página.
                </p>
            </div>
             <div>
                <div>
                    <Button text="VOLVER" onClick={() => router.push('/')} />
                </div>
                <div>
                    <Button text="Terminos" onClick={() => router.push('/terminos-y-condiciones')} />
                </div>
            </div>
        </div>
    )
}

export default Politicas;