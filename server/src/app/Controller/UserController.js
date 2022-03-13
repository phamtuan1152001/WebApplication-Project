const User = require('../Models/LoginModel')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../../config/index')

function encodedToken(userID){
    return jwt.sign({
        iss: 'Le Quang Tuan',
        sub: userID,
        iat: new Date().getTime(),
        exp: new Date().setTime(new Date().getDate() + 3)
    },  JWT_SECRET)
}

async function register (req, res){
    await res.render('register')
}

async function newUser (req, res, next){
    const newUser = new User(req.value.body)

    await newUser.save()

    return res.status(201).json({user: newUser})
}

const getUser = async (req, res, next) => {
    const { userID } = req.value.params

    const user = await User.findById(userID)

    return res.status(200).json({user})
}

async function SignUp (req, res, next){
    const {Firstname, Lastname, Address, Phone, email, password} = req.body

    //Check email already or not.
    const foundUser = await User.findOne({email})
    if (foundUser){
        return res.status(403).json({error: {message: 'Email is already!!'}})
    }

    //Create new user.
    const newUser = new User({Firstname, Lastname, Address, Phone, email, password})
    newUser.save()

    //Encode a token.
    const token = encodedToken(newUser._id)

    res.setHeader('Authorization', token)
    return res.status(201).json({success: true})
}

async function SignIn (req, res, next){
    //Assign token
    const token = await encodedToken(req.user._id)
    res.setHeader('Authorization', token)
    return res.status(200).json({success: true})
}

async function Secret (req, res, next){
    return res.status(200).json({resources: true})
}

async function AuthGoogle (req, res, next){
    //Assign token
    const token = await encodedToken(req.user._id)
    res.setHeader('Authorization', token)
    return res.status(200).json({success: true})
}

async function AuthFacebook (req, res, next){
    // //Assign token
    const token = await encodedToken(req.user._id)
    res.setHeader('Authorization', token)
    return res.status(200).json({success: true})
}

async function replaceUser (req, res, next){
    // enforce new user to old user
    const { userID } = req.value.params

    const newUser = req.value.body

    const result = await User.findByIdAndUpdate(userID, newUser)

    return res.status(200).json({success: true})
}

async function updateUser (req, res, next){
    // number of fields
    const { userID } = req.value.params

    const newUser = req.value.body
    
    const result = await User.findByIdAndUpdate(userID, newUser)
    
    return res.status(200).json({success: true})
}

module.exports = {
    register, 
    newUser,
    getUser,
    replaceUser,
    updateUser,
    SignUp,
    SignIn,
    Secret,
    AuthGoogle,
    AuthFacebook
}