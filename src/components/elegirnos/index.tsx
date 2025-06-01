import Image from 'next/image';
const Elegirnos = () => {

  return (
    <div className="w-full h-[1476px] mt-4">
      <p className="text-center text-title1 text-primary-600 mt-4">¿POR QUE ELEGIRNOS?</p>
      <div className='mt-4 space-y-4'>
        <div className="flex flex-col space-y-4 pt-4 shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Atencion.png"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Atencion Personalizada"
          />
          <p className='text-primary-600 text-title2 text-center'>Atencion Personalizada</p>
          <p className='text-secondary-900 text-body text-center'>Recibí atención directa de nuestro equipo en cada paso del proceso.</p>
        </div>

        <div className="flex flex-col space-y-4 pt-4 shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Confianza.png"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Confianza"
          />
          <p className='text-primary-600 text-title2 text-center'>Confianza Asegurada</p>
          <p className='text-secondary-900 text-body text-center'>Elegí una compañía que respalda cada decisión con compromiso y seriedad.</p>
        </div>

        <div className="flex flex-col space-y-4 pt-4 shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Planes.png"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Planes"
          />
          <p className='text-primary-600 text-title2 text-center'>Planes Accesibles</p>
          <p className='text-secondary-900 text-body text-center'>Elegí la protección que necesitás, sin gastar de más.</p>
        </div>
        
        <div className="flex flex-col space-y-4 pt-4 shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Online.png"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Atencion Personalizada"
          />
          <p className='text-primary-600 text-title2 text-center'>Gestión 100% Online</p>
          <p className='text-secondary-900 text-body text-center'>Hacelo todo desde tu casa, sin papeles ni trámites complicados.</p>
        </div>

      </div>
    </div>
  )
}

export default Elegirnos;