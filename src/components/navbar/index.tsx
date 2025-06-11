
"use client"
import Image from 'next/image';
import { MenuCustomAnimation } from './MenuCustomAnimation';

const Navbar = () => {

    return (

        <nav className="flex w-full bg-primary-600 h-16 px-4 py-2 justify-between items-center lg:h-24 lg:px-16 lg:py-4 ">
         <div>
            <MenuCustomAnimation/>
         </div>
            <div>
                <Image
                    src="/Logo_C.png"
                    width={28}
                    height={28}
                    alt="Logo Simple Seguros Camporino"
                />
            </div>

        </nav >
    )
}

export default Navbar;
