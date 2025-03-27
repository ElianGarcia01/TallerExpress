import Product from "../../models/Product.js"

let createMany = async (req, res, next) => {
    try {
        let products = req.body
        let createdProducts = await Product.insertMany(products)
        return res.status(201).json({
            response: createdProducts
        })
    } catch (error) {
        next(error)
    }
}

export default createMany