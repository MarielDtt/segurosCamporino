'use client'
import Carrusel from "@/components/carrusel";
import Elegirnos from "@/components/elegirnos";
import Form from "@/components/form";
import Resenia from "@/components/resenia";
import ScrollableIcon from "@/components/scrollableIcon";
import SplashScreen from "@/components/splashscreen";
import Image from 'next/image';
import { useState, useEffect } from "react";
export default function Home() {
  const [splashActive, setSplashActive] = useState<boolean>(false);

  useEffect(() => {
    const splash = setTimeout(() => {
      setSplashActive(true)
    }, 3000);
    return () => clearTimeout(splash);
  }, []);

  return (
    <div>
      {
        !splashActive ? (<SplashScreen />) :
          (<>
            <div className="w-[390px] h-[336px] p-6 flex justify-center items-center bg-Background-Default mt-6 m-auto">
              <Carrusel />
            </div>
            <div className="w-[390px] h-[76px] mt-6 flex overflow-hidden justify-center items-center m-auto ">
              <ScrollableIcon />
            </div>
            <div className="w-[390px] h-[1876x] mt-6 flex justify-center items-center bg-Background-Default m-auto">
              <Elegirnos />
            </div>
            <div className="w-[390px] h-[400px] mt-6 flex justify-center items-center bg-Background-Default-400 m-auto">
              <Resenia />
            </div>
            <div className="w-[390px] h-[528px] mt-6 flex justify-center items-center bg-Background-Default m-auto">
              <Form />
            </div>
            <a
              href="https://wa.me/5491166603916?text=Hola%2C%20quiero%20cotizar%20un%20seguro"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src="/WhatsApp.svg"
                alt="WhatsApp"
                width={32}
                height={32}
              />
            </a>
          </>)
      }
    </div>

  );
}
