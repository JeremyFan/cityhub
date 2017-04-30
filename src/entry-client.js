import { router, app } from './app'

window.store = window.__INITIAL_STATE__ || {}

app.$mount('#app')