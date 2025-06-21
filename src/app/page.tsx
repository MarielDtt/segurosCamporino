'use client'
import Carrusel from "@/components/carrusel";
import Elegirnos from "@/components/elegirnos";
import Form from "@/components/form";
import Resenia from "@/components/resenia";
import ScrollableIcon from "@/components/scrollableIcon";
import SplashScreen from "@/components/splashscreen";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react"
import dynamic from 'next/dynamic'


export default function Home() {
  const [splashActive, setSplashActive] = useState<boolean>(false);

  const ComponentResenia = dynamic(() => import('../components/resenia'))
  const ComponentForm = dynamic(() => import('../components/form'))
  
  useEffect(() => {
    const splash = setTimeout(() => {
      setSplashActive(true)
    }, 4000);
    return () => clearTimeout(splash);
  }, []);

  return (
    <AnimatePresence>
      {
        !splashActive ? (<SplashScreen key="splash" />) :
          (<div className="w-auto h-auto lg:w-auto space-y-6 lg:space-y-10 m-auto">
            <div className="lg:hidden flex h-auto m-auto mt-6 px-6 justify-center items-center bg-primary-600">
              <Image
                src="/General_Mobile.webp"
                alt="Descripcion General de Seguros para Mobile"
                width={350}
                height={302}
              />
            </div>
            <div className="hidden lg:flex w-full justify-center items-center bg-primary-600">
              <Image
                src="/GeneralCompleto.png"
                alt="Descripcion General de Seguros para Mobile"
                width={1200}
                height={312}
              />
            </div>
            <div className="w-[390px] h-auto lg:w-[860px] p-6 flex justify-center items-center bg-Background-Default m-auto">
              <Carrusel />
            </div>
            <div className="w-[390px] lg:w-[872px] h-auto flex overflow-hidden justify-center items-center bg-Background-Default m-auto ">
              <ScrollableIcon />
            </div>
            <div className="w-[390px] h-auto lg:w-[832px] flex justify-center items-center bg-Background-Default m-auto">
              <Elegirnos />
            </div>
            <div className="w-[390px] h-auto lg:w-[880px] flex justify-center items-center bg-Background-Default m-auto">
              <ComponentResenia />
            </div>
            <div className="w-[390px] h-auto lg:w-[556px] flex justify-center items-center bg-Background-Default m-auto">
              <ComponentForm/>
            </div>
            <a
              href="https://wa.me/5491161076870?text=Hola%2C%20quiero%20cotizar%20un%20seguro"
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
          </div>)
      }
    </AnimatePresence>

  );
}