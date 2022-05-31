const router = require('express-promise-router')()
const orderController = require('../app/Controller/OrderController')

const passport = require('passport')
require('../config/db/passport')


router.route('/order').post(passport.authenticate('jwt', {session: false}), orderController.order)

router.route('/bill').get(orderController.checkout)

module.exports = router