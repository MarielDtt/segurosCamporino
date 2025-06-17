import { Stethoscope, Store, Ambulance, Factory, Car, Bike, PawPrint, Church, HeartPulse, House  } from 'lucide-react';
import IconItem from './IconItem';

export type icons = {
  id: number;
  icon: React.ReactNode;
  href: string;
  title: string
};

const icons: icons[] = [
  { id: 1, icon: <Stethoscope size={48} color="#211657" strokeWidth={2} />, href: "rc-profesional", title: "Seguro RC Profesional" },
  { id: 2, icon: <Store size={48} color="#211657" strokeWidth={2} />, href: "/comercios", title: "Seguro Para Comercios" },
  { id: 3, icon: <Ambulance size={48} color="#211657" strokeWidth={2} />, href: "/accidentes_personales", title: "Seguro Accidentes Personales" },
  { id: 4, icon: <Factory size={48} color="#211657" strokeWidth={2} />, href: "/art", title: "Seguros ART" },
  { id: 5, icon: <Car size={48} color="#211657" strokeWidth={2} />, href: "/autos", title: "Seguro Para Autos" },
  { id: 6, icon: <Bike size={48} color="#211657" strokeWidth={2} />, href: "/motovehiculos", title: "Seguro de Motovehiculos" },
  { id: 7, icon: <PawPrint size={48} color="#211657" strokeWidth={2} />, href: "/mascotas", title: "Seguro Para Mascotas" },
  { id: 8, icon: <Church size={48} color="#211657" strokeWidth={2} />, href: "/sepelio", title: "Seguro de Sepelio" },
  { id: 9, icon: <HeartPulse size={48} color="#211657" strokeWidth={2} />, href: "/vida_retiro", title: "Seguro de Vida y Retiro" },
  { id: 10, icon: <House size={48} color="#211657" strokeWidth={2} />, href: "/hogar", title: "Seguro Integral de Hogar" },
]

const ScrollableIcon = () => {

  return (
    <div className="w-full flex justify-between items-center" id="planes">
      <div className='my-auto pr-2 lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
          <path d="M0.145873 10.9177L18.2709 0.74497L18.0182 21.528L0.145873 10.9177Z" fill="#3A2C83" />
        </svg>
      </div>
      <div className='flex-1 min-w-0 flex overflow-x-auto whitespace-nowrap space-x-4 lg:overflow-visible lg:justify-center'>
        {
          icons.map(({ id, icon, href, title }) => {
            return (
              <IconItem key={id} icon={icon} href={href} title={title} />
            )
          })
        }
      </div>
      <div className='my-auto pl-2 lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
          <path d="M18.237 10.9976L0.450141 21.7506L0.0311813 0.970199L18.237 10.9976Z" fill="#3A2C83" />
        </svg>
      </div>
    </div>
  )
}

export default ScrollableIcon;