const express = require('express')
const router = require('express-promise-router')()

const UserController = require('../app/Controller/UserController')
const { ValidateBody, ValidateParam, Schemas } = require('../Validation/Validate')

const passport = require('passport')
require('../config/db/passport')

router.route('/:userID')
    .patch(ValidateParam(Schemas.idSchema, 'userID'), ValidateBody(Schemas.userOptionalSchema), UserController.updateUser)

router.route('/auth/google').post(passport.authenticate('google-plus-token', {session: false}) ,UserController.AuthGoogle)

router.route('/auth/facebook').post(passport.authenticate('facebook-token', {session: false}) ,UserController.AuthFacebook)

router.route('/signup').post(ValidateBody(Schemas.SignUpSchema), UserController.SignUp)

router.route('/signin').post(ValidateBody(Schemas.SignInSchema),passport.authenticate('local', ({session: false})), UserController.SignIn)

module.exports = router