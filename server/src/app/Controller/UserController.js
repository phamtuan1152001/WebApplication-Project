const User = require('../Models/LoginModel')
const db = require('../Models')
const ROLES = db.ROLES
const Role = require('../Models/Role')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../../config/index')

function encodedToken(userID){
    return jwt.sign({
        iss: 'Le Quang Tuan',
        sub: userID,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 3)
    },  JWT_SECRET)
}

const index = async (req, res, next) => {
    const users = await User.find({})

    return res.status(200).json({users})
}

async function newUser (req, res, next){
    const newUser = new User(req.value.body)

    await newUser.save()

    return res.status(201).json({user: newUser})
}

const getUser = async (req, res, next) => {
    const { userID } = req.value.params

    const user = await User.findOne(
        {_id: userID},
        {
            Firstname: 1,
            Lastname: 1, 
            Address: 1,
            Phone: 1,
            roles: 1
        })

    return res.status(200).json({user})
}

async function SignUp (req, res, next){
    const {Firstname, Lastname, Address, Phone, roles, email, password} = req.body

    //Check email already or not.
    const foundUser = await User.findOne({email})
    if (foundUser){
        return res.status(403).json({error: {message: 'Email is already!!'}})
    }
    // Check role
    if (req.body.roles) {
        if (!ROLES[0].includes(req.body.roles)){
            res.status(400).send({
                message: `Failed! Role ${req.body.roles} does not exist!`
            })
            return
        }
    }

    //Create new user.
    const newUser = new User({Firstname, Lastname, Address, Phone, roles, email, password})

    newUser.save((err, user) => {
        if (err) {
            res.status(500).json({
                message: err
            })
            return
        }
        // Create admin account
        if (req.body.roles) {
            Role.find({
                name: req.body.roles
            },(err, role) => {
                if (err) {
                    res.status(500).json({
                        message: err
                    })
                    return
                }
                user.roles = role[0]._id
                user.save()
            })
        }else {
            // Create user account
            Role.findOne({name: 'user'}, (err, role) => {
                if (err) {
                    res.status(500).json({
                        message: err 
                    });
                    return;
                  }
                  user.roles = [role._id]
                  user.save()
            })
        }
    })
    return res.status(201).json('Successfully!!')
}

async function SignIn (req, res, next){
    //Assign token
    const token = await encodedToken(req.user._id)
    res.setHeader('Authorization', token)

    const user = await User.findOne(
        {email: req.body.email},
        {Firstname: 1, Lastname: 1, roles: 1}
    ).populate('roles')
    //return res.status(200).json({success: true})
    return res.send({user, token});
    next()
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

async function updateUser (req, res, next){
    // number of fields
    const { userID } = req.value.params

    const newUser = req.value.body
    
    const result = await User.findByIdAndUpdate(userID, newUser)
    
    return res.status(200).json({success: true})
}

module.exports = {
    index, 
    newUser,
    getUser,
    updateUser,
    SignUp,
    SignIn,
    Secret,
    AuthGoogle,
    AuthFacebook
}