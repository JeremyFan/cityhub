import Vue from 'vue'
import App from './App.vue'
import router from './router'

const app = new Vue({
  router,
  render: h => h(App)
})

export { router, app }