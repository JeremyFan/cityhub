<template>
  <div class="page-city">
    <!--
    <aside>
      <div class="avatar" :style="{backgroundImage: 'url(/public/images/'+ city + '.jpg)'}"></div>
      <h2>{{ city }}</h2>
    </aside>
    -->
    <section>
      <weather :now="now" :aqi="aqi"></weather>
      <h3>History AQI Grid</h3>
      <aqi-grid></aqi-grid>
    </section>
  </div>
</template>

<script>
import api from '../api'
import Weather from '../components/Weather.vue'
import AqiGrid from '../components/AqiGrid.vue'

function preFetch({store, route}) {
  // hack for nanjing
  const city = route.params.id === 'nanjing' ? 'CN101190101' : route.params.id

  return api
    .request('weather', { city })
    .then(data => {
      const { aqi, now } = data
      Object.assign(store, { aqi: aqi.city, now })
    })
}

export default {
  name: 'city-view',

  components: { Weather, AqiGrid },

  data() {
    return {
      city: this.$route.params.id,
      aqi: {},
      now: {}
    }
  },

  preFetch,

  computed: {
    avatar() {
      return '/public/images/' + this.city + '.jpg'
    }
  },

  beforeMount() {
    if (window.store) {
      this.now = store.now
      this.aqi = store.aqi
    }
  }
}
</script>

<style lang="stylus">
.page-city
  display flex
  margin 0 180px
  /*
  aside
    width 250px
    
    .avatar
      width 230px
      height 230px
      border-radius 5px
      background no-repeat 50% 50%
      background-size cover

    h2
      font-weight normal
      text-transform capitalize
  */
  section
    flex 1
</style>