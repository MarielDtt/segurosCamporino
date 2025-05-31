import { IContact } from "@/components/form/interfaceContact";



const ValidateContact = (Input: IContact) => {
    const errors: IContact = { name: "", email: "", subject: "", message: "" };

    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const subjectRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,50}$/
    const messageRegex = /^.{10,}$/;

    if (!Input.name) {
        errors.name = "Campo Requerido"
    } else if (!nameRegex.test(Input.name.trim())) {
        errors.name = "Nombre y Apellido Invalido, Formato Esperado: Solo Letras Nombre y Apellido"
    }

    if (!Input.email) {
        errors.email = "Campo Requerido"
    } else if (!emailRegex.test(Input.email.trim())) {
        errors.email = "Email Invalido, Formato Esperado: xxxx@xxxx.com.ar"
    }

      if (!Input.subject) {
        errors.subject = "Campo Requerido"
    } else if (!subjectRegex.test(Input.subject.trim())) {
        errors.subject = "Asunto Invalido, Formato Esperado: Solo Letras con un Maximo de 50 Caracteres"
    }

       if (!Input.message) {
        errors.message = "Campo Requerido";
      } else if (!messageRegex.test(Input.message.trim())) {
        errors.message = "El mensaje debe tener al menos 10 caracteres";
      }


    return errors;

}

export default ValidateContact;