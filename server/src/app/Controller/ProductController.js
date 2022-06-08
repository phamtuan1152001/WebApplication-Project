const products = require('../Models/ProductModel')
const BestSeller = require('../Models/BestSellerModel')
const Trending = require('../Models/TrendingModel')
const detail = require('../Models/Detail')


/*=====================API GET=====================*/

// Show all products in database
async function getAllProduct(req, res) {
    const product = await products.find();

    return res.status(200).json(product);
}

// Show detail product
async function DetailProcduct(req, res) {
    // Show all product information
    const product = await products.findOne({
        _id: req.params.keyProduct
    })
    const details = await detail
        .find({ pID: { $regex: product._id } })
        .populate({
            path: "pID",
        });


    res.send(details)
}

// Search product 
async function Search(req, res) {
    const data = await products.find({
        "$or": [
            {
                Name: {
                    $regex: req.params.key
                }
            }
        ]
    })
    res.send(data)
}

// Get all best seller products
async function GetBestSellerProduct(req, res) {
    const getBsl = await BestSeller.find({}).populate("productID")
    res.status(200).json(getBsl)
}

// Get all trending products
async function GetTrendingProduct(req, res) {
    const getTrending = await Trending.find({}).populate("productID")
    res.status(200).json(getTrending)
}

/*=====================API POST=====================*/

// Create new product by admin
async function CreateProduct(req, res) {
    //const { Name, Price, Descriptions, Image, category, size, color, amount} = req.body
    const { Name, Price, Descriptions, Image, category, rating, size, color } = req.body


    // Check product already or not
    const checkProduct = await products.findOne({ Name })

    if (checkProduct) {
        return res.status(403).json({ error: { message: 'The product had already in the system!!' } })
    }

    // Create product
    const newProduct = new products({ Name, Price, Descriptions, Image, category, rating, size, color })
    newProduct.save()

    // Create prduct detail
    const pID = newProduct._id.toString()
    const detailProduct = new detail({ pID })
    detailProduct.save()

    res.status(200).json("Created!!")
}

// Create best seller product by admin
async function AddBestSellerProduct(req, res) {
    products.findById(req.params.id, async function (err, product) {
        if (err) res.status(403).json({ error: { message: "Erorrr!!" } })
        const productID = product._id.toString()
        const bsl = new BestSeller({ productID })
        // Check product already or not
        const checkProduct = await BestSeller.findOne({ productID })
        if (checkProduct == null) {
            bsl.save()
            res.status(200).json("Added Best Seller Product Successfully")
        } else {
            res.status(403).json("Product added")
        }
    })
}

// Create trending product by admin
async function AddTrendingProduct(req, res) {
    products.findById(req.params.id, async function (err, product) {
        if (err) res.status(403).json({ error: { message: "Erorrr!!" } })
        const productID = product._id.toString()
        const trending = new Trending({ productID })

        // Check product already or not
        const checkProduct = await Trending.findOne({ productID })
        if (checkProduct == null) {
            trending.save()
            res.status(200).json("Added Trending Product Successfully")
        } else {
            res.status(403).json("Product added")
        }
    })
}

/*=====================API DELETE=====================*/

// Delete product by admin
function DeleteProduct(req, res) {
    products.findOneAndRemove({ _id: req.params.id }, function (err, product) {
        if (err) res.status(403).json({ error: { message: "The product is not already!!" } })
        detail.findOneAndRemove({ pID: product._id.toString() }, err => {
            if (err) res.status(402).json({ error: { message: "The product is not already!!" } })
        })
        res.status(200).json("Deleted!!")
    })
}

// Delete best seller product by admin
async function DeleteBestSellerProduct(req, res) {
    BestSeller.findOneAndRemove({ _id: req.params.id }, function (err, bsl) {
        if (err) return res.status(403).json({ error: { message: "Erorr!" } })

        if (bsl == null) {
            return res.status(403).json("Product is not already!!")
        }
        res.status(200).json("deleted!!")
    })
}

// Delete trending product by admin
async function DeleteTrendingProduct(req, res) {
    Trending.findOneAndRemove({ _id: req.params.id }, function (err, trending) {
        if (err) return res.status(403).json({ error: { message: "Erorr!" } })

        if (trending == null) {
            return res.status(403).json("Product is not already!!")
        }
        res.status(200).json("deleted!!")
    })
}

/*=====================API PUT=====================*/

// Update product by admin
async function UpdateProduct(req, res) {
    products.findById(req.params.id, async function (err, product) {
        if (err) res.status(403).json({ error: { message: "Erorrr!!" } })
        // Update product
        product.Name = req.body.Name
        product.Price = req.body.Price
        product.Descriptions = req.body.Descriptions
        product.Image = req.body.Image
        product.category = req.body.category
        product.rating = req.body.rating
        product.size = req.body.size
        product.color = req.body.color

        product.save()

        // Update detail product
        // detail.findOne({pID: req.params.id}, function(err, details){
        //     if (err) res.status(403).json({error: {message: "Erorrr!!"}})
        //     details.size = req.body.size
        //     details.color = req.body.color
        //     details.amount = req.body.amount
        //     details.save() 
        // })
        res.status(200).json("Updated!!")
    })
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