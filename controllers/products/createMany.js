import Product from "../../models/Product.js"

let createMany = async (req, res, next) => {
    try {
        let products = req.body
        let createdProducts = await Product.insertMany(products)
        return res.status(201).json({
            response: createdProducts
        })
    } catch (error) {
        return res.status(500).json({
            response: error.message
        })
    }
}

export default createMany