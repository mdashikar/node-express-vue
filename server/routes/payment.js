const router = require('express').Router();

// Require controller modules.
let stripe_controller = require('../controllers/stripePayment')

// POST request for handling charge on stripe.
router.post("/charge", stripe_controller.stripe_charge);

// Route to get the data for a charge filtered by the charge's id
router.get('/charge/:id', stripe_controller.stripe_charge_get_detail);



module.exports = router;