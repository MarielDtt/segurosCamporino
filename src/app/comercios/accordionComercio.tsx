const faqs = [
  {
    pregunta: "¿Es obligatorio?",
    respuesta:
      "No, pero en muchos casos para habilitar un comercio se exigen coberturas como de responsabilidad civil e incendio, entre otras.",
  },
  {
    pregunta: "¿Quién puede contratar los productos de Seguro de Comercio?",
    respuesta:
      "Puede suscribir tanto el titular del comercio, como la persona encargada del mismo.",
  },
  {
    pregunta: "¿Qué opciones de cobertura tengo?",
    respuesta:
      "Teniendo en cuenta la situación del comercio y su administración, contás con dos opciones de contratación: un seguro personalizado, indicando los valores de cada riesgo por separado; y otra más rápida y ágil, como es el producto Combo Plus.",
  },
];

const AccordionComercioFijo = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto space-y-4 px-4 py-8 mt-12">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg overflow-hidden transition-all duration-300"
        >
          {/* PREGUNTA */}
          <div className="bg-Background-Lilac hover:bg-Background-Default text-primary-600 px-6 py-4 font-semibold text-lg sm:text-xl transition-colors">
            {item.pregunta}
          </div>

          {/* RESPUESTA */}
          <div className="bg-white px-6 py-4 text-base text-primary-900">
            {item.respuesta}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComercioFijo;
