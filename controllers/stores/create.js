import Store from "../../models/Store.js"

let create = async (req, res, next) => {
    try {
        let StoreInfo = req.body
        let createStore = await Store.create(StoreInfo)
        return res.status(201).json({
            response: createStore
        }) 
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default create