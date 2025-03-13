import { Schema, model } from "mongoose"

let collection = "stores"

let schema = Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    active: { type: Boolean, required: true }
},
    {
        timestamps: true
    })

let Store = model(collection, schema)

export default Store