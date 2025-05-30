"use client"
import { Button } from "../button";



const Formulario = () => {

  return (
    <div className="w-full h-[494]">
      <p className="mt-16 text-center text-title1 text-primary-600">Dejanos tu Consulta</p>
      
      <form className="w-[344px] h-[494px] flex flex-col items-center m-auto space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 mt-2" > Nombre y Apellido:</label>
          <input type="name" name="name" id="name" className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Email:</label>
          <input type="email" name="email" id="email" className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Asunto:</label>
          <input type="subject" name="subject" id="subject" className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Mensaje:</label>
          <textarea name="subject" id="subject" className="w-[314px] h-[96px] rounded-md border-primary-400 border bg-Background-Lilac" />
        </div>
        <div>
          <Button text="Enviar"/>
        
        </div>
     
      </form>
    </div>

  )
}

export default Formulario;

/*   <div className="flex flex-col">
          <textarea className="text-body text-primary-500 p-2" > Mensaje:</textarea>
          <input type="message" name="message" id="message" className="w-[314px] h-8" />
        </div>*/