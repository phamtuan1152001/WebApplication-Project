const detail = require('../Models/Detail');
const user = require('../Models/LoginModel');
const Bill = require('../Models/OrderModel')

const jwt = require('jsonwebtoken')

// Check the invoice before ordering the product
async function checkout(req, res) {
    // The information of user
    const token = req.header('Authorization').split(' ')
    const verifytoken = jwt.verify(token[1], process.env.JWT_SECRET)
    const User = await user.findOne(
        {_id: verifytoken.sub}, 
        {_id: 0, Firstname: 1, Lastname: 1, Address: 1, Phone: 1}
    )

    // The information of products
    var TotalPrice = 0
    const DetailID = req.body.map(element => {
        return element.pID
    })

    // Calculate Total Price And Check The Quantity Of Products
    var pID = [DetailID.length]
    for (var i = 0; i < DetailID.length; i++){
        const amountOfProduct = req.body[i].amount
        const colorOfProduct = req.body[i].color
        const sizeOfProduct = req.body[i].Size

        const product = await detail.findOne({pID: DetailID[i]}).populate('pID')
        const newAmount = product.amount - amountOfProduct  
        if (newAmount < 0){
            return res.status(401).json("Not enough quantity for product " + product.pID.Name)
        }else {
            TotalPrice += product.pID.Price
            pID[i] = product
            product.amount = amountOfProduct
            product.color = colorOfProduct
            product.size = sizeOfProduct
        } 
    }
    
    // Show bill 
    const DatePrint = new Date().getTime();
    const bill = ({User, pID, TotalPrice, DatePrint})

    res.status(200).json(bill)
}

// After check bill and confirm that, the system will save the bill into database
async function order(req, res) {
    // The information of user
    const token = req.header('Authorization').split(' ')
    const verifytoken = jwt.verify(token[1], process.env.JWT_SECRET)
    const User = await user.findOne({_id: verifytoken.sub})

    // The information of products
    var TotalPrice = 0
    const DETAIL = req.body.map(element => {
        return element.pID
    })

    // Calculate Total Price
    var DetailID = [DETAIL.length]
    for (var i = 0; i < DETAIL.length; i++){
        const amountOfProduct = req.body[i].amount
        const colorOfProduct = req.body[i].color
        const sizeOfProduct = req.body[i].Size
        const product = await detail.findOne({pID: DETAIL[i]}).populate('pID')
        
        TotalPrice += product.pID.Price
        DetailID[i] = product
        product.amount = amountOfProduct
        product.color = colorOfProduct
        product.size = sizeOfProduct
    }
    
    // Save bill in database
    const DatePrint = new Date().getTime();
    const UserID = User._id.toString()
    const bill = new Bill({UserID, DetailID, TotalPrice, DatePrint})

    bill.save()
    
    // Update the amount of products after selling for user. 
    for (var i = 0; i < DetailID.length; i++){
        const amountOfProduct = req.body[i].amount
        const DetailProduct = await detail.findOne({pID: DETAIL[i]}).populate('pID')

        DetailProduct.amount = DetailProduct.amount - amountOfProduct  
        DetailProduct.save()   
    }
    res.status(200).json("Order Success!!")
}

// Store the user's purchase history
async function bill (req, res){
    // The information of user
    const token = req.header('Authorization').split(' ')
    const verifytoken = jwt.verify(token[1], process.env.JWT_SECRET)
    const User = await user.findOne(
        {_id: verifytoken.sub}, 
    )

    const bill = await Bill.find({UserID: User._id})

    res.status(200).json(bill)
}

module.exports = {
    checkout,
    order,
    bill
}
