import { Schema, model } from "mongoose"

let collection = "Employees"

let schema = Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: false },
    active: { type: Boolean, required: true }
},
{
    timestamps: true
})

let Employee = model(collection,schema)

export default Employee