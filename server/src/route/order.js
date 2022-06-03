const router = require('express-promise-router')()
const orderController = require('../app/Controller/OrderController')

const passport = require('passport')
require('../config/db/passport')


router.route('/order').post(passport.authenticate('jwt', {session: false}), orderController.order)

router.route('/checkout').get(passport.authenticate('jwt', {session: false}), orderController.checkout)

router.route('/history/bill').get(orderController.bill)

module.exports = router