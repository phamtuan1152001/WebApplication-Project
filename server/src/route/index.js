const express = require('express')
const router = require('express-promise-router')()

const UserController = require('../app/Controller/UserController')
const { ValidateBody, ValidateParam, Schemas } = require('../Validation/Validate')

const passport = require('passport')
const passportConfig = require('../config/db/passport')

router.route('/')
    .get(UserController.index)
    .post(ValidateBody(Schemas.userSchema), UserController.newUser)

router.route('/:userID')
    .get(ValidateParam(Schemas.idSchema, 'userID'), UserController.getUser)
    .patch(ValidateParam(Schemas.idSchema, 'userID'), ValidateBody(Schemas.userOptionalSchema), UserController.updateUser)

router.route('/auth/google').post(passport.authenticate('google-plus-token', {session: false}) ,UserController.AuthGoogle)

router.route('/auth/facebook').post(passport.authenticate('facebook-token', {session: false}) ,UserController.AuthFacebook)

router.route('/signup').post(ValidateBody(Schemas.SignUpSchema), UserController.SignUp)

router.route('/signin').post(ValidateBody(Schemas.SignInSchema),passport.authenticate('local', ({session: false})), UserController.SignIn)

router.route('/secret').get(passport.authenticate('jwt', {session: false}), UserController.Secret)

module.exports = router