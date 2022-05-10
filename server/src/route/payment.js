const router = require('express-promise-router')()
const stripe = require('stripe')(process.env.STRIPE)

router.route('/payment').post(async (req, res) => {
    stripe.customer.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount: '2000',
        description: 'Web App Project',
        currency: 'usd',
        customer: customer.id
    }))
    .then(charge => console.log('success'))
})

module.exports = router