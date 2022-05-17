const express = require('express')
const router = require('express-promise-router')()

const ProductController = require('../../app/Controller/ProductController')
const auth = require('../../config/db/auth')
const passport = require('passport')
require('../../config/db/passport')

// Route User
router.route('/search/:key').get(passport.authenticate('jwt', {session: false}), ProductController.Search)

router.route('/products/:keyProduct').get(passport.authenticate('jwt', {session: false}), ProductController.DetailProcduct)

router.route('/products').get(ProductController.getAllProduct)


// Route Admin
router.route('/admin/create-product').post(auth.verifyToken, auth.isAdmin, ProductController.CreateProduct)

router.route('/admin/update-product/:id').put(auth.verifyToken, auth.isAdmin, ProductController.UpdateProduct)

router.route('/admin/delete-product').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteProduct)

router.route('/admin/add-bestseller/:id').post(auth.verifyToken, auth.isAdmin, ProductController.AddBestSellerProduct)

router.route('/admin/bestseller').get(ProductController.GetBestSellerProduct)

router.route('/admin/delete-bestseller').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteBestSellerProduct)

router.route('/admin/add-trending/:id').post(auth.verifyToken, auth.isAdmin, ProductController.AddTrendingProduct)

// router.route('/admin/trending').get(ProductController.GetTrendingProduct)

// router.route('/admin/add-trending').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteTrendingProduct)

module.exports = router