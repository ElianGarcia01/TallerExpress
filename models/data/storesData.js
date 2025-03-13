import "dotenv/config.js"
import "../../config/database.js"
import Store from "../Store.js"

const stores = [
    { name: "Supermercado La Estrella", address: "Calle 123, Centro", phone: 123456789, active: true },
    { name: "Tienda Express", address: "Avenida Siempre Viva 742", phone: 987654321, active: false },
    { name: "ElectroMundo", address: "Carrera 10 #45-67", phone: 456789123, active: true },
    { name: "Moda Urbana", address: "Plaza Central Local 12", phone: 321654987, active: false },
    { name: "Deportes y Más", address: "Zona Comercial Norte", phone: 741852963, active: true }
]

Store.insertMany(stores)
