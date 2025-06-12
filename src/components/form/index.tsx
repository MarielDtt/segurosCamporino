"use client"
import ValidateContact from "@/helpers/validateContact";
import { Button } from "../button";
import { useState } from "react";
import { IContact } from "./interfaceContact";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';



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

  const [touchInput, setTouchInput] = useState<{ name: boolean; email: boolean, subject: boolean, message: boolean }>({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    const newFormData = { ...formData, [name]: value }; //crea una copia de formData

    setFormData(newFormData); //Actualiza el estado formData con los nuevos datos del formulario

    setErrors(ValidateContact(newFormData)); //Actualiza el estado errors para mostrar o no los mensajes de error debajo del campo correspondiente.

  }
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormInvalid) return;

    try {
      await emailjs.send(
        'service_yf7hsuh',
        'template_lxreicq',
         formData as unknown as Record<string, unknown>,
        'wgZGVEu3gI1xnB0Qu'
      );
      toast.success('¡Mensaje enviado con éxito!', {
        style: {
          background: '#8FCB9B ',
          color: '#f3f0f9',
          border: '2px solid #5EA877',
          fontFamily: 'var(--font-poppins)',
          textAlign: 'center',
          minWidth: '200px',
        },
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTouchInput({
        name: false,
        email: false,
        subject: false,
        message: false
      });
    }

    catch (error) {
      toast.error('Mensaje No Enviado. Intente Nuevamente.', {
        style: {
          background: '#F4A3A3',
          color: '#f3f0f9',
          border: '2px solid #D87373',
          fontFamily: 'var(--font-poppins)',
          textAlign: 'center',
        },
      });
    }


  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target

    setTouchInput({
      ...touchInput,
      [name]: true
    })
    setErrors(ValidateContact(formData));
  }

  const isFormInvalid = Object.values(errors).some(error => error !== "") || Object.values(formData).some(value => value.trim() === "");

  return (
    <div className="w-full h-[528px] mt-4 lg:w-[500px]" id="contacto">
      <p className="text-center text-title1 text-primary-600 mt-4 lg:text-display3 m-auto">Dejanos tu Consulta</p>

      <form className="w-[344px] h-[494px] flex flex-col items-center m-auto space-y-4 pt-4 lg:w-[500px]" onSubmit={handleOnSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 mt-2 lg:text-subtitle2" > Nombre y Apellido:</label>
          <input
            id="name"
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2 lg:w-[500px]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {touchInput.name && <p className="text-signal3 text-red-600">{errors.name}</p>}

        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 lg:text-subtitle2" > Email:</label>
          <input
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2 lg:w-[500px]"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {touchInput.email && <p className="text-signal3 text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 lg:text-subtitle2" > Asunto:</label>
          <input
            className="w-[314px] h-8 rounded-md border-primary-400 border bg-Background-Lilac pl-2 lg:w-[500px]"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {touchInput.subject && <p className="text-signal3 text-red-600">{errors.subject}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-body text-primary-500 lg:text-subtitle2" > Mensaje:</label>
          <textarea
            className="w-[314px] h-[96px] rounded-md border-primary-400 border bg-Background-Lilac pl-2 lg:w-[500px]"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {touchInput.message && <p className="text-signal3 text-red-600">{errors.message}</p>}
        </div>
        <div>
          <Button
            text="Enviar"
            type="submit"
            disabled={isFormInvalid}
          />

        </div>

      </form>
    </div>

  )
}

export default Form;

