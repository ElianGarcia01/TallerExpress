import Product from "../../models/Product.js"

let create = async (req, res, next) => {
    try {
        let ProductInfo = req.body
        let createProduct = await Product.create(ProductInfo)
        return res.status(201).json({
            response: createProduct
        }) 
        
    } catch (error) {
        next(error)
    }
}

export default create