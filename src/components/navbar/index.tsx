
"use client"
import Image from 'next/image';
import { MenuCustomAnimation } from './MenuCustomAnimation';
import Link from 'next/link';

const Navbar = () => {

    return (

        <nav className="flex w-full bg-primary-600 h-16 px-4 py-2 justify-between items-center lg:h-24 lg:px-16 lg:py-4 ">
            <div className='block lg:hidden'>
                <MenuCustomAnimation />
            </div>

            <div className="relative w-7 h-7 lg:w-14 lg:h-14">
                <Image
                    src="/Logo_C.webp"
                    fill
                    alt="Logo Simple Seguros Camporino"
                />
            </div>
            <div className='hidden lg:flex'>
                <div className='flex text-Background-Lilac text-title3 gap-x-6'>
                    <Link href="/?section=porque-elegirnos" className='hover:text-secondary-300'> ¿Por qué elegirnos? </Link>
                    <Link href="/?section=planes" className='hover:text-secondary-300'> Planes y Coberturas </Link>
                    <Link href="/preguntas-frecuentes" className='hover:text-secondary-300'>Preguntas Frecuentes </Link>
                    <Link href="/?section=contacto" className='hover:text-secondary-300'> Contacto </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
