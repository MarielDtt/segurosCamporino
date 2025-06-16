import Image from 'next/image';
const Resenia = () => {

  return (
    <div className="w-full h-auto">
      <p className="text-center text-title1 lg:text-display3 text-primary-600 my-4">Clientes Satisfechos</p>
      <div className='space-y-4 lg:space-y-6 bg-Background-Default h-auto'>
        <div className="flex w-full lg:w-[832px] lg:h-[240px] p-2 lg:p-4 lg:m-auto space-x-8 drop-shadow-lg shadow-md items-center">
          <div className="relative w-[240px] h-[96px] lg:w-[240px] lg:h-[160px]" role="img" aria-label="Retrato de Nora, cliente satisfecha de Villa Urquiza">
            <Image
              src="/Nora.png"
              fill
              className="rounded-full"
              alt=""
            />
          </div>

          <div className='flex flex-col'>
            <p className='text-center text-body lg:text-subtitle1'>
              “Me explicaron todo con paciencia y claridad. Sentí que podía confiar desde el primer momento.”
            </p>
            <p className='text-caption lg:text-subtitle2 text-secondary-800 text-center'>-Nora, Villa Urquiza</p>
          </div>
        </div>

        <div className="flex w-full lg:w-[832px] lg:h-[240px] p-2 lg:p-4 lg:m-auto space-x-8 drop-shadow-lg shadow-md bg-Background-Lilac items-center">
          <div className='flex flex-col'>
            <p className='text-center text-body lg:text-subtitle1'>
              “No pensé que contratar un seguro fuera tan fácil. Me acompañaron en cada paso.”
            </p>
            <p className='text-caption lg:text-subtitle2 text-secondary-800 text-center '>-Jorge, San Martin</p>
          </div>
          <div className="relative w-[240px] h-[104px] lg:w-[240px] lg:h-[160px]" role="img" aria-label="Retrato de Jorge, cliente satisfecho de San Martín">
            <Image
              src="/Jorge.png"
              fill
              className="rounded-full"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full lg:w-[832px] lg:h-[240px] p-2 lg:p-4 lg:m-auto space-x-8 drop-shadow-lg shadow-md items-center">
          <div className="relative w-[240px] h-[104px] lg:w-[240px] lg:h-[160px]" role="img" aria-label="Retrato de Luis, cliente satisfecho de Villa Urquiza">
            <Image
              src="/Luis.png"
              fill
              className="rounded-full"
              alt=""
            />
          </div>

          <div className='flex flex-col'>
            <p className='text-center text-body lg:text-subtitle1'>
              “Sentí que hablaba con personas reales, no con una máquina. Muy buena experiencia.”
            </p>
            <p className='text-caption lg:text-subtitle2 text-secondary-800 text-center'>-Luis, Villa Urquiza</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resenia;