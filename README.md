

> A simple app to payment on stripe. Front-end:-  Vue.js site with Product, Order and Confirmation pages. Built with vue-router, axios and Stripe.js. And Back-end:- Node.js server to handle payment processing and order confirmation details.

> Add your stripe public key & secret key on directory -> server/routes/payment.js & src/components/Order.vue(only update public key here.)

## Build Setup

``` bash
# install dependencies
npm install

# serve both front-end & back-end 
npm start

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
