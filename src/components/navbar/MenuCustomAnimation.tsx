import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import MenuSandwich from "./MenuSandwich";
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export function MenuCustomAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      open={isOpen}
      handler={setIsOpen}
    >
      <MenuHandler>
        <div className="min-w-[48px]">
          <MenuSandwich isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
      </MenuHandler>

      {/* @ts-ignore */}
      <MenuList className=" z-[9999] backdrop-blur-md ml-4 w-[280px] h-[405px] bg-[rgba(243,240,249,0.9)] rounded-2xl border-4 border-secondary-800">
        <Image
          src="/Logo_C.webp"
          width={40}
          height={40}
          alt="Logo Simple Seguros Camporino"
          className=" mt-4 m-auto"
        />
        <hr className="border border-secondary-800 w-[255px] h-[4px] my-4 m-auto bg-secondary-800" />

        {/* @ts-ignore */}
        <MenuItem className="!text-primary-600 text-title3">
          <a href="/?section=porque-elegirnos" onClick={() => setIsOpen(false)}>¿Por qué elegirnos?</a>
        </MenuItem>

        <hr className="border border-secondary-800 w-[200px]  my-4 m-auto bg-secondary-800" />

        {/* @ts-ignore */}
        <MenuItem className="!text-primary-600 text-title3">
          <a href="/?section=planes" onClick={() => setIsOpen(false)}>Planes y Cobertura</a>
        </MenuItem>

        <hr className="border border-secondary-800 w-[200px]  my-4 m-auto bg-secondary-800" />

        {/* @ts-ignore */}
        <MenuItem className="!text-primary-600 text-title3">
          <a onClick={() => router.push('/preguntas-frecuentes')}>Preguntas Frecuentes</a>  </MenuItem>

        <hr className="border border-secondary-800 w-[200px]  my-4 m-auto bg-secondary-800" />

        {/* @ts-ignore */}
        <MenuItem className="!text-primary-600 text-title3">
          <a href="/?section=contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </MenuItem>

      </MenuList>
    </Menu>
  );
}