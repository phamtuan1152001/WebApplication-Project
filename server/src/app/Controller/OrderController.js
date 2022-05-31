const products = require('../Models/ProductModel');
const detail = require('../Models/Detail');
const user = require('../Models/LoginModel');
const Bill = require('../Models/OrderModel')

const redis = require('redis')
const { get, set, incrby, decrby, exists, setnx} = require('../../model.redis/redis')

const jwt = require('jsonwebtoken')


async function order(req, res) {
    // The information of user
    const token = req.header('Authorization').split(' ')
    const verifytoken = jwt.verify(token[1], process.env.JWT_SECRET)
    const User = await user.findOne({_id: verifytoken.sub})

    // Check if the product is still available or sold out

    // The information of products
    var TotalPrice = 0
    const DetailID = req.body.map(element => {
        return element.pID
    })

    // Calculate Total Price
    for (var i = 0; i < DetailID.length; i++){
        const product = await detail.findOne({pID: DetailID[i]}).populate('pID')
        TotalPrice += product.pID.Price
    }
    
    // Save bill in database
    const DatePrint = new Date().getTime();
    const UserID = User._id.toString()
    const bill = new Bill({UserID, DetailID, TotalPrice, DatePrint})

    bill.save()
    res.status(200).json("Saved")
}

async function checkout(req, res) {
    // // The information of user
    // const token = req.header('Authorization').split(' ')
    // const verifytoken = jwt.verify(token[1], process.env.JWT_SECRET)
    // const User = await user.findOne(
    //     {_id: verifytoken.sub}, 
    //     {_id: 0, Firstname: 1, Lastname: 1, Address: 1, Phone: 1}
    // )

    // // The information of products
    // var TotalPrice = 0
    // var product
    // const DetailID = req.body.map(element => {
    //     return element.pID
    // })

    // // Calculate Total Price
    // for (var i = 0; i < DetailID.length; i++){
    //     const product = await detail.findOne({pID: DetailID[i]}).populate('pID')
    //     TotalPrice += product.pID.Price
    // }
    
    // // Save bill in database
    // const DatePrint = new Date().getTime();
    // const bill = ({User, product, TotalPrice, DatePrint})

    // res.status(200).json(bill)
}

module.exports = {
    checkout,
    order
}
