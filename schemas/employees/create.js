import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        "string.base": "En el name no se estan pidiendo numeros",
        "string.alphanum": "No uses caracteres especiales",
        "any.required": "El name es requerido"
    }),
    position: joi.string().required().alphanum().messages({
        "string.base": "En el position no se estan pidiendo numeros",
        "string.alphanum": "No uses caracteres especiales",
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
    store: joi.objectId().required().messages({
        "string.pattern.name": "Store debe ser un ObjectId válido",
        "any.required": "Store es requerido"
    })
})

export default schema
