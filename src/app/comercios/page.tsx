import AccordionComercio from "./accordionComercio";
import ComercioHero from "./comercioHero";


export const metadata = {
    title: "Seguro para Comercios - Protegé tu negocio | Seguros Camporino",
    description: "Asegurá tu local contra robo, incendio, responsabilidad civil y más. Cotizá online y encontrá la cobertura ideal para tu comercio.",
};
const Comercios = () => {

    return (
        <div className="bg-Background-Default py-8">
          <ComercioHero/>
          <AccordionComercio/>
        </div>
    );

}

export default Comercios;