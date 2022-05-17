const products = require('../Models/ProductModel')
const BestSeller = require('../Models/BestSellerModel')
const Trending = require('../Models/TrendingModel')
const detail = require('../Models/Detail')


// API FOR USER

// Show all products in database
async function getAllProduct(req, res) {
    const product = await products.find();

    return res.status(200).json(product);
}

// Show detail product
async function DetailProcduct (req, res){
    // Show all product information
    const product = await products.findOne({
        _id:  req.params.keyProduct
    })
    const details = await detail
      .find({ pID: { $regex: product._id } })
      .populate({
        path: "pID",
      });

    
    res.send(details)
}

// Search product 
async function Search (req, res){
    const data = await products.find({
        "$or": [
            {
                Name:{
                    $regex: req.params.key
                } 
            }
        ]
    })
    res.send(data)
}

// API FOR ADMIN

async function CreateProduct(req, res) {
    const { Name, Price, Descriptions, Image, category, size, color} = req.body

    // Check product already or not
    const checkProduct = await products.findOne({Name})

    if (checkProduct){
        return res.status(403).json({error: {message: 'The product had already in the system!!'}})   
    }

    // Create product
    const newProduct = new products({ Name, Price, Descriptions, Image, category})
    newProduct.save()

    // Create prduct detail
    const pID = newProduct._id.toString()
    const detailProduct = new detail({pID, size, color})
    detailProduct.save()
  
    res.status(200).json("Created!!")
}


function DeleteProduct(req, res) {
    products.findOneAndRemove({Name: req.body.Name}, function(err, product){
        if (err) res.status(403).json({error: {message: "The product is not already!!"}})
        detail.findOneAndRemove({pID: product._id.toString()}, err => {
            if (err) res.status(402).json({error: {message: "The product is not already!!"}})
        })
        res.status(200).json("Deleted!!")
    })
}

async function UpdateProduct(req, res) {
    products.findById(req.params.id, async function(err, product){
        if (err) res.status(403).json({error: {message: "Erorrr!!"}})
        // Update product
        product.Name = req.body.Name
        product.Price = req.body.Price
        product.Descriptions = req.body.Descriptions
        product.Image = req.body.Image
        product.category = req.body.category

        //Check the properties of product had already or not
        const checkProduct = await products.findOne(
            {
                Name: req.body.Name,
            })
        if (checkProduct) res.status(401).json({error: {message: "The properties of product had already!!" }})
        product.save()

        // Update detail product
        detail.findOne({pID: req.params.id}, function(err, details){
            if (err) res.status(403).json({error: {message: "Erorrr!!"}})
            details.size = req.body.size
            details.color = req.body.color
            details.save() 
        })
        res.status(200).json("Updated!!")
    })
}

async function AddBestSellerProduct(req, res) {
    products.findById(req.params.id, function(err, product){
        if (err) res.status(403).json({error: {message: "Erorrr!!"}})
        const productID = product._id.toString()
        const bsl = new BestSeller({productID})
        bsl.save()
    })
}

async function GetBestSellerProduct(req, res) {
    const getBsl = await BestSeller.find({}).populate("productID")
    res.send(getBsl)
}

async function DeleteBestSellerProduct(req, res) {
    res.send("deleted!!")
}

async function AddTrendingProduct(req, res) {
    // products.findById(req.params.id, function(err, product){
    //     if (err) res.status(403).json({error: {message: "Erorrr!!"}})
    //     const productID = product._id.toString()
    //     const trending = new Trending({productID})
    //     Trending.findOne({productID}, function(err, check) {
    //         if (check.productID === productID){
    //             res.status(401).json("Product added")
    //         }
    //     })
    //     trending.save()
    // })
    // res.status(200).json("Added Trending Product Successfully")
}

async function GetTrendingProduct(req, res) {
    res.send("getted!!")
}

async function DeleteTrendingProduct(req, res) {
    res.send("deleted!!")
}

module.exports = {
    Search,
    DetailProcduct,
    getAllProduct,
    CreateProduct,
    DeleteProduct,
    UpdateProduct,
    AddBestSellerProduct,
    GetBestSellerProduct,
    AddTrendingProduct,
    DeleteBestSellerProduct,
    GetTrendingProduct,
    DeleteTrendingProduct
}