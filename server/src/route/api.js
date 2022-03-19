const express = require('express')
const router = require('express-promise-router')()

const APIController = require('../app/Controller/APIController')

router.get('/products', APIController.getAllProduct )

module.exports = router