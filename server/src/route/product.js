const express = require('express')
const router = require('express-promise-router')()

const ProductController = require('../app/Controller/ProductController')
const auth = require('../config/db/auth')

// Route Get Method
router.route('/search/:key').get(ProductController.Search)

router.route('/products/:keyProduct').get(ProductController.DetailProcduct)

router.route('/products').get(ProductController.getAllProduct)

router.route('/trending').get(ProductController.GetTrendingProduct)

router.route('/bestseller').get(ProductController.GetBestSellerProduct)


// Route Post Method
router.route('/admin/create-product').post(auth.verifyToken, auth.isAdmin, ProductController.CreateProduct)

router.route('/admin/add-bestseller/:id').post(auth.verifyToken, auth.isAdmin, ProductController.AddBestSellerProduct)

router.route('/admin/add-trending/:id').post(auth.verifyToken, auth.isAdmin, ProductController.AddTrendingProduct)


// Route Delete Method
router.route('/admin/delete-product/:id').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteProduct)

router.route('/admin/delete-bestseller/:id').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteBestSellerProduct)

router.route('/admin/delete-trending/:id').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteTrendingProduct)


// Route Put Method
router.route('/admin/update-product/:id').put(auth.verifyToken, auth.isAdmin, ProductController.UpdateProduct)

module.exports = router