const express = require('express')
const router = require('express-promise-router')()

const ProductController = require('../../app/Controller/ProductController')

router.route('/search/:key').get(ProductController.Search)

router.route('/products/:keyProduct').get(ProductController.DetailProcduct)

router.get('/products', ProductController.getAllProduct )

module.exports = router