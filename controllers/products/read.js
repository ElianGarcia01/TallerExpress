import { response } from "express"
import Product from "../../models/Product.js"


let allProducts = async (req, res, next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let productByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams
        let all = await Product.find({ name: nameQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let productByBrand = async (req, res, next) => {
    try {
        let nameQuery = req.params.brandParams
        let all = await Product.find({ brand: nameQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
export { allProducts, productByName, productByBrand }