import "dotenv/config.js"
import "../../config/database.js"
import Employee from "../Employee.js"

const employees = [
    { name: "Juan Pérez", position: "Gerente", salary: 50000, active: true },
    { name: "María López", position: "Vendedora", salary: 25000, active: true },
    { name: "Carlos Sánchez", position: "Cajero", salary: 22000, active: false },
    { name: "Ana Martínez", position: "Supervisora", salary: 30000, active: true },
    { name: "Luis Torres", position: "Almacén", salary: 18000, active: true },
    { name: "Gabriela Ramírez", position: "Recepcionista", salary: 20000, active: false },
    { name: "Fernando Gómez", position: "Seguridad", salary: 23000, active: true },
    { name: "Sofía Herrera", position: "Vendedora", salary: 24000, active: true },
    { name: "Ricardo Díaz", position: "Auxiliar de limpieza", salary: 15000, active: false },
    { name: "Laura Castro", position: "Marketing", salary: 28000, active: true },
    { name: "Jorge Paredes", position: "Logística", salary: 27000, active: true },
    { name: "Andrea Vega", position: "Recursos Humanos", salary: 31000, active: false },
    { name: "David Ríos", position: "Técnico", salary: 26000, active: true },
    { name: "Valeria Muñoz", position: "Atención al Cliente", salary: 22000, active: true },
    { name: "Pedro Navas", position: "Administrador", salary: 45000, active: false }
]

Employee.insertMany(employees)