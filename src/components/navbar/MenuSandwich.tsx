
import { Menu, X } from 'lucide-react';

type MenuSandwichProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuSandwich = ({ isOpen, toggleMenu }: MenuSandwichProps) => {
   
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
