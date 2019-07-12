const keyPublishable = 'pk_test_2N2vys0uQzlghA2f7hjfjOFd  ';
const keySecret = 'sk_test_KL6JvASZ2BVaxr6K9IRmU6N0';
const stripe = require("stripe")(keySecret);


// Handle charge object with data from the client side on POST
exports.stripe_charge = function (req, res) {
    // Create the charge object with data from the Vue.js client
    var newCharge = {
        amount: 23500,
        currency: "usd",
        source: req.body.token_from_stripe, // obtained with Stripe.js on the client side
        description: req.body.specialNote,
        receipt_email: req.body.email,
        shipping: {
            name: req.body.name,
            address: {
                line1: req.body.address.street,
                city: req.body.address.city,
                state: req.body.address.state,
                postal_code: req.body.address.zip,
                country: 'US'
            }
        }
    };

    // Call the stripe objects helper functions to trigger a new charge
    stripe.charges.create(newCharge, function (err, charge) {
        // send response
        if (err) {
            console.error(err);
            res.json({
                error: err,
                charge: false
            });
        } else {
            // send response with charge data
            res.json({
                error: false,
                charge: charge
            });
        }
    });
}

// Handle to get data for a charge filtered by the charge's id
exports.stripe_charge_get_detail = function (req, res) {
    stripe.charges.retrieve(req.params.id, function (err, charge) {
        if (err) {
            res.json({
                error: err,
                charge: false
            });
        } else {
            res.json({
                error: false,
                charge: charge
            });
        }
    });
}