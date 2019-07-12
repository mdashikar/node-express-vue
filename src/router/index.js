import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/Product'
import Order from '../components/Order.vue'
import Complete from '../components/Complete.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { name: 'home', path: '/', component: Product },
    { name: 'order', path: '/order', component: Order },
    { name: 'order-complete', path: '/order-complete/:id', component: Complete }
  ]
})
