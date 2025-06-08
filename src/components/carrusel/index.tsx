"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";

type ImagenCarrusel = {
  id: number;
  img: string;
};

const imagenes: ImagenCarrusel[] = [
  { id: 1, img: "/Seguro_Automotor.jpg" },
  { id: 2, img: "/Seguro_Hogar.jpg" },
  { id: 3, img: "/Seguro_Motovehiculo.jpg" },
  { id: 4, img: "/Seguro_Accidentes.jpg" },
];

const Carrusel = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const imagenActual = imagenes[currentIndex];


  useEffect(() => {

    const timer = setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev + 1 >= imagenes.length) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2000);
     return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      <div className="relative flex items-center">
        <div

          className="w-full h-full overflow-x-hidden whitespace-nowrap"
        >
          <Image
            src={imagenActual.img}
            alt={`logo ${imagenActual.id}`}
            width={340}
            height={285}
            className="inline-block m-3"
          />

        </div>
      </div>
    </>
  );
}

export default Carrusel;