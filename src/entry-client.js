import Vue from 'vue'
import { router, app } from './app'

window.store = window.__INITIAL_STATE__ || {}

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    console.log('route update')
    const { preFetch } = this.$options
    if (preFetch) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

// app.$mount('#app')
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }
    Promise.all(activated.map(c => {
      if (c.preFetch) {
        return c.preFetch({ store, route: to })
      }
    })).then(() => {
      next()
    }).catch(next)
  })
  app.$mount('#app')
})