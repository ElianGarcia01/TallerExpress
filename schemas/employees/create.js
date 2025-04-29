import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        "string.base": "En el name no se están pidiendo números",
        "string.alphanum": "No uses caracteres especiales en name",
        "any.required": "El name es requerido"
    }),
    position: joi.string().required().alphanum().messages({
        "string.base": "En el position no se están pidiendo números",
        "string.alphanum": "No uses caracteres especiales en position",
        "any.required": "El position es requerido"
    }),
    salary: joi.number().required().messages({
        "number.base": "Salary debe ser un número",
        "any.required": "Salary es requerido"
    }),
    active: joi.boolean().required().messages({
        "boolean.base": "Active debe ser verdadero o falso",
        "any.required": "Active es requerido"
    }),
    email: joi.string().email().required().messages({
        "string.email": "El email debe tener un formato válido",
        "any.required": "El email es requerido"
    }),
    password: joi.string().min(6).required().messages({
        "string.base": "El password debe ser una cadena de texto",
        "string.min": "El password debe tener al menos 6 caracteres",
        "any.required": "El password es requerido"
    })    
})

export default schema
