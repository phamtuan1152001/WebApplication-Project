const express = require('express')
const router = require('express-promise-router')()

const ProductController = require('../../app/Controller/ProductController')
const auth = require('../../config/db/auth')
const passport = require('passport')
require('../../config/db/passport')

// Route User
router.route('/search/:key').get(passport.authenticate('jwt', {session: false}), ProductController.Search)

router.route('/products/:keyProduct').get(passport.authenticate('jwt', {session: false}), ProductController.DetailProcduct)

router.route('/products').get(passport.authenticate('jwt', {session: false}), ProductController.getAllProduct )


// Route Admin
router.route('/admin/create-product').post(auth.verifyToken, auth.isAdmin, ProductController.CreateProduct)

router.route('/admin/get-product').get(auth.verifyToken, auth.isAdmin, ProductController.getAllProduct)

router.route('/admin/update-product/:id').put(auth.verifyToken, auth.isAdmin, ProductController.UpdateProduct)

router.route('/admin/delete-product').delete(auth.verifyToken, auth.isAdmin, ProductController.DeleteProduct)

router.route('/admin/add-bestseller/:id').post(auth.verifyToken, auth.isAdmin, ProductController.AddBestSellerProduct)

router.route('/admin/bestseller').get(auth.verifyToken, auth.isAdmin, ProductController.GetBestSellerProduct)

router.route('/admin/add-trending').post(auth.verifyToken, auth.isAdmin, ProductController.AddTrendingProduct)

module.exports = router