import Image from 'next/image';
const Resenia = () => {

  return (
    <div className="w-full h-[512px] space-y-4">
      <p className="mt-16 text-center text-title1 text-primary-600">Clientes Satisfechos</p>
      <div className="flex w-full h-[96px] p-2 space-x-4 drop-shadow-lg ">
        <Image
          src="/Nora.png"
          width={96}
          height={96}
          className="object-cover rounded-full"
          alt="Cliente Nora"
        />
        <div className='flex flex-col'>
          <p className='text-center text-body'>
            “Me explicaron todo con paciencia y claridad. Sentí que podía confiar desde el primer momento.”
          </p>
          <p className='text-caption text-secondary-800 text-center'>-Nora, Villa Urquiza</p>
        </div>
      </div>

      <div className="flex w-full h-[96px] p-2 space-x-4 bg-Background-Lilac mt-auto">
        <div className='flex flex-col'>
          <p className='text-center text-body'>
            “No pensé que contratar un seguro fuera tan fácil. Me acompañaron en cada paso.”
          </p>
          <p className='text-caption text-secondary-800 text-center'>-Jorge, Córdoba</p>
        </div>

         <Image
          src="/Jorge.png"
          width={96}
          height={96}
          className="object-cover rounded-full"
          alt="Cliente Nora"
        />
      </div>

      <div className="flex w-full h-[96px] p-2 space-x-4 drop-shadow-lg ">
        <Image
          src="/Luis.png"
          width={96}
          height={96}
          className="object-cover rounded-full"
          alt="Cliente Nora"
        />
        <div className='flex flex-col'>
          <p className='text-center text-body'>
           “Sentí que hablaba con personas reales, no con una máquina. Muy buena experiencia.”
          </p>
          <p className='text-caption text-secondary-800 text-center'>-Nora, Villa Urquiza</p>
        </div>
      </div>
    </div>
  )
}

export default Resenia;