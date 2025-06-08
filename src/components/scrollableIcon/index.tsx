import { Stethoscope, Store, Ambulance, Factory, Car, Bike, PawPrint, Church, } from 'lucide-react';
import IconItem from './IconItem';

export type icons = {
  id: number;
  icon: React.ReactNode;
};

const icons: icons[] = [
  { id: 1, icon: <Stethoscope size={48} color="#211657" strokeWidth={2} /> },
  { id: 2, icon: <Store size={48} color="#211657" strokeWidth={2} /> },
  { id: 3, icon: <Ambulance size={48} color="#211657" strokeWidth={2} /> },
  { id: 4, icon: <Factory size={48} color="#211657" strokeWidth={2} /> },
  { id: 5, icon: <Car size={48} color="#211657" strokeWidth={2}/> },
  { id: 6, icon: <Bike size={48} color="#211657" strokeWidth={2} /> },
  { id: 7, icon: <PawPrint size={48} color="#211657" strokeWidth={2}/> },
  { id: 8, icon: <Church size={48} color="#211657" strokeWidth={2} /> },
]

const ScrollableIcon = () => {

  return (
    <div className="w-[390px] flex justify-between items-center h-[76px] ">
      <div className='my-auto pr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
          <path d="M0.145873 10.9177L18.2709 0.74497L18.0182 21.528L0.145873 10.9177Z" fill="#3A2C83" />
        </svg>
      </div>
      <div className='flex-1 min-w-0 flex overflow-x-auto whitespace-nowrap space-x-4'>
        {
        icons.map(({id, icon}) => {
          return (
            <IconItem key={id} icon={icon} />
          )
        })
        }
      </div>
      <div className='my-auto pl-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
          <path d="M18.237 10.9976L0.450141 21.7506L0.0311813 0.970199L18.237 10.9976Z" fill="#3A2C83" />
        </svg>
      </div>
    </div>
  )
}

export default ScrollableIcon;