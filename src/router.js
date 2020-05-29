import Vue from 'vue'
import Router from 'vue-router'
import Catalog from './views/Catalog.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/basket',
    name: 'basket',
    // lazy-load when the route is visited - generates a separate chunk (basket.[hash].js) for this route
    component: () => import(/* webpackChunkName: "basket" */ './views/Basket.vue')
  },
  {
    path: '/catalog/starships/:id',
    name: 'starshipDetail',
    component: () => import(/* webpackChunkName: "starship-detail" */ './views/StarshipDetail.vue')
  }
]

export default new Router({
  mode: 'hash',
  routes
})
