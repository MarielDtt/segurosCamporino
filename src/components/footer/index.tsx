"use client"
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';



const Footer = () => {

    return (
        <div className="flex w-full bg-primary-600 h-[120px] px-4 py-2 justify-between items-center lg:h-24 lg:px-16 lg:py-4 mt-6 ">
            <div className="flex  flex-col w-full px-4 py-2 justify-between items-center ">
                <div className="flex w-full justify-between items-center mb-2">
                    <Image
                        src="/Logo_C.png"
                        width={40}
                        height={40}
                        alt="Logo Simple Seguros Camporino"
                    />
                    <div className='flex'>
                        <a href="https://www.facebook.com/camporinoseguros" target="_blank" rel="noopener noreferrer" className='pr-4'>
                            <Facebook color="#f3f0f9" />
                        </a>
                        <a href="https://www.instagram.com/seguroscamporino/" target="_blank" rel="noopener noreferrer" className='pr-4'>
                            <Instagram color="#f3f0f9" />
                        </a>
                    </div>
                </div>
                <hr className="w-full border-t border-white my-1" />
                <div className='flex justify-center w-full'>
                    <p className='text-Background-Lilac text-signal2'>© 2025 Camporino Seguros · Todos los Derechos Reservados  </p>
                </div>
                <div className='flex mt-2'>
                    <a>
                        <p className='text-Background-Lilac text-signal2'>Términos y condiciones ·</p>
                    </a>
                    <a>
                        <p className='text-Background-Lilac text-signal2'>Política de privacidad</p>
                    </a>
                </div>
                <div className='mt-2'>
                    <p className='text-Background-Lilac text-signal3'>Diseñado por @MarielDtt</p>
                </div>
            </div>
        </div >
    )
}

export default Footer;


