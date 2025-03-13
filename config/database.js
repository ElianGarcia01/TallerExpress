import mongoose from "mongoose"

async function connectDB() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}

connectDB()