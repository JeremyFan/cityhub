import Vue from 'vue'
import Router from 'vue-router'

// FIXME
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

Vue.use(Router)

// const HomeView = () => System.import('../views/HomeView.vue')
// const CityView = () => System.import('../views/CityView.vue')

const routes = [
  { path: '/', component: HomeView },
  { path: '/city/:id', component: CityView }
]

export default new Router({
  mode: 'history',
  routes
})