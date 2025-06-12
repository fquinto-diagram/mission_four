export function useFormValidation(){
    const nameRegex= /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/
    const dniRegex= /^\d{8}[A-Za-z]$/
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const validateName = (name: string)=> nameRegex.test(name)
    const validateDni = (dni: string)=> dniRegex.test(dni)
    const validateEmail = (email: string)=> emailRegex.test(email)

    return{validateName, validateDni, validateEmail

    }
}