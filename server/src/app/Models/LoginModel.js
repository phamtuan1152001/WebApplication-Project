const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcryptjs')

const Login = new Schema({
    Firstname: {
        type: String, 
        maxLength: 50, 
    },
    Lastname: {
        type: String, 
        maxLength: 50, 
    },
    Address: {
        type: String,
    },
    Phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: { 
        type: String, 
        maxLength: 50,
    },
    roles: [
        {
          type: Schema.Types.String,
          ref: "Role",
        },
      ],
    AuthGoogleID: {
        type: String,
        default: null
    },
    AuthFacebookID: {
        type: String,
        default: null
    },
    AuthType: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        default: 'local'
    },
    confirmPassword: {
        type: String, 
        maxLength: 50,
    }
})

Login.pre('save', async function(next){
    try {
        if (this.AuthType !== 'local') next()

        //Generate a salt
        const salt = await bcrypt.genSalt(10)
        //Genarate a password 
        const passwordHashed = await bcrypt.hash(this.password, salt)
        //Re-assign password hashed
        this.password = passwordHashed
        next()
    } catch (error) {
        next(error)
    }
})

Login.methods.isValidPassword = async function(newPassword){
    try{
        return await bcrypt.compare(newPassword, this.password)
    } catch(error){
        throw new Error(error)
    }
}
module.exports = mongoose.model('Login', Login)