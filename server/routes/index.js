module.exports = function (app) {
    const paymentRoutes = require('./payment')
    app.use(paymentRoutes);
};