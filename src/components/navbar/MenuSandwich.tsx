
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const MenuSandwich = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {isOpen ?
                (
                    <X color="#f3f0f9" className='cursor-pointer lg:hidden' onClick={toggleMenu} />
                )
                :
                (
                    <Menu color="#f3f0f9" className='cursor-pointer lg:hidden' onClick={toggleMenu} />
                )
            }
        </>
    )

}

export default MenuSandwich;
