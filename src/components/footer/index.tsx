"use client"
import Image from 'next/image';
import { Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {

    return (
        <div className="flex w-full bg-primary-600 h-[120px] px-4 py-2 justify-between items-center lg:h-[200px] lg:px-16 lg:py-4 mt-20 ">
            <div className="flex  flex-col w-full px-4 py-2 justify-between items-center ">
                <div className="flex w-full justify-between items-center mb-2">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16">
                        <Image
                            src="/Logo_C.webp"
                            alt="Logo Simple Seguros Camporino"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className='flex'>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 pr-4">
                            <a href="https://www.facebook.com/camporinoseguros" target="_blank" rel="noopener noreferrer" className='pr-4'>
                                <Facebook className="w-full h-full" color="#f3f0f9" />
                            </a>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 pr-4">
                            <a href="https://www.instagram.com/seguroscamporino/" target="_blank" rel="noopener noreferrer" className='pr-4'>
                                <Instagram className="w-full h-full" color="#f3f0f9" />
                            </a>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 pr-4">
                            <a href="mailto:seguroscamporino@hotmail.com?subject=Asunto del correo&body=Cuerpo del correo" target="_blank" rel="noopener noreferrer" className='pr-4'>
                                <Mail className="w-full h-full" color="#f3f0f9" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-full border-t border-white my-1" />
                <div className="w-full text-center overflow-x-auto">
                    <p className="whitespace-nowrap text-Background-Lilac text-signal2 lg:text-title3">
                        © 2025 Camporino Seguros · Todos los Derechos Reservados
                    </p>
                </div>
                <div className='flex mt-2 gap-x-4'>
                    <Link href="/terminos-y-condiciones">
                        <p className='underline text-Background-Lilac text-signal2 lg:text-subtitle2'>Términos y condiciones</p>
                    </Link>
                    <Link href="/politicas-de-privacidad">
                        <p className='underline text-Background-Lilac text-signal2 lg:text-subtitle2'>Política de privacidad</p>
                    </Link>
                </div>
                <div className='mt-2'>
                    <p className='text-Background-Lilac text-signal3 lg:text-bodyBold'>Diseñado por @MarielDtt</p>
                </div>
            </div>
        </div >
    )
}

export default Footer;


