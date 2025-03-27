import Store from "../../models/Store.js"


let allStores = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storeByName = async (req, res, next) => {
    try {
        let queryParams = req.params.nameParams
        let all = await Store.find({ name: queryParams })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storeByAddress = async (req, res, next) => {
    try {
        let queryParams = req.params.addressParams
        let all = await Store.find({ address: queryParams })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allStores, storeByName, storeByAddress }