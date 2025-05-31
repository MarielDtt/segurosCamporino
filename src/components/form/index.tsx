"use client"
import ValidateContact from "@/helpers/validateContact";
import { Button } from "../button";
import { useState } from "react";
import { IContact } from "./interfaceContact";



const Form = () => {
  const [formData, setFormData] = useState<IContact>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<IContact>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    
    const newFormData = { ...formData, [name]: value }; //crea una copia de formData
    
    setFormData(newFormData); //Actualiza el estado formData con los nuevos datos del formulario

    setErrors(ValidateContact(newFormData)); //Actualiza el estado errors para mostrar o no los mensajes de error debajo del campo correspondiente.

  }
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


  }

  return (
    <div className="w-full h-[494px]">
      <p className="mt-16 text-center text-title1 text-primary-600">Dejanos tu Consulta</p>

      <form className="w-[344px] h-[494px] flex flex-col items-center m-auto space-y-4" onSubmit={handleOnSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 mt-2" > Nombre y Apellido:</label>
          <input
            id="name"
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
          />
          {errors.name && <p className="text-signal3 text-red-600">{errors.name}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Email:</label>
          <input
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
          />
          {errors.email && <p className="text-signal3 text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Asunto:</label>
          <input
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInput}
          />
          {errors.subject && <p className="text-signal3 text-red-600">{errors.subject}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500" > Mensaje:</label>
          <textarea
            className="w-[314px] h-[96px] rounded-md border-primary-400 border bg-Background-Lilac pl-2"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInput}
          />
          {errors.message && <p className="text-signal3 text-red-600">{errors.message}</p>}
        </div>
        <div>
          <Button text="Enviar" type="submit" />

        </div>

      </form>
    </div>

  )
}

export default Form;

