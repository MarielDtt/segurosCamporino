import Image from 'next/image';
const Elegirnos = () => {

  return (
    <div className="w-full h-auto p-4 lg:p-6" id="porque-elegirnos">
      <p className="text-center text-title1 lg:text-display3 text-primary-600">¿POR QUE ELEGIRNOS?</p>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 lg:px-4 lg:mx-auto lg:justify-center">
        <div className="flex flex-col space-y-4 pt-4  shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Atencion.webp"
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
            src="/Confianza.webp"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Confianza"
          />
          <p className='text-primary-600 text-title2 text-center'>Confianza Asegurada</p>
          <p className='text-secondary-900 text-body text-center'>Elegí una compañía que respalda cada decisión con compromiso y seriedad.</p>
        </div>

        <div className="flex flex-col space-y-4 pt-4  shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Planes.webp"
            width={296}
            height={160}
            className="object-cover rounded-xl shadow-md"
            alt="Planes"
          />
          <p className='text-primary-600 text-title2 text-center'>Planes Accesibles</p>
          <p className='text-secondary-900 text-body text-center'>Elegí la protección que necesitás, sin gastar de más.</p>
        </div>

        <div className="flex flex-col space-y-4 pt-4  shadow-lg p-4 rounded-xl items-center bg-Background-Default">
          <Image
            src="/Online.webp"
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