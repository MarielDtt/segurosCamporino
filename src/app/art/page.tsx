import Construccion from "@/components/construccion";
import Image from "next/image";

export const metadata = {
  title: "Seguro ART - Cobertura para empleadores | Seguros Camporino",
  description: "Contratá el seguro ART obligatorio para tus empleados. Cumplí con la ley y protegé a tu equipo frente a accidentes laborales.",
};
const Art = () => {

    return (
        <div className="p-8  bg-Background-Default h-auto">
           {/* <div className="flex-col">
                <h1 className="text-primary-600 text-title2">ART</h1>
                <h3 className="text-subtitle1 text-primary-500">Cuidá a tus empleados, protegé a tu empresa.
                </h3>
                <p>Cumplí con la ley, garantizá atención médica inmediata y respaldá a tu equipo frente a accidentes laborales.</p>
            </div>
            <div className="">
                <Image
                    src="/family-home.jpg"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>*/}
            <Construccion/>
        </div>
    )
}

export default Art;