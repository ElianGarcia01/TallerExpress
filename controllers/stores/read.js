import { response } from "express"
import Store from "../../models/Store.js"


let allStores = async (req,res,next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default allStores