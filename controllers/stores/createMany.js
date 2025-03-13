import Store from "../../models/Store.js"

let createMany = async (req, res, next) => {
    try {
        let stores = req.body
        let createdStores = await Store.insertMany(stores)
        return res.status(201).json({
            response: createdStores
        })
    } catch (error) {
        return res.status(500).json({
            response: error.message
        })
    }
}

export default createMany