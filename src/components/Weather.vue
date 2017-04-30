<template>
  <article class="weather">
    <div class="bg"></div>
    <div class="cover"></div>
    <div class="content">
      <!-- <h3>AQI Now</h3> -->
      <div class="aqi">
        {{ aqi.aqi }} {{ aqi.qlty }}
      </div>

      <div class="aqi-list">
        <div class="item">
          <div class="value">{{ aqi.pm25 }}</div>
          <div class="text">PM2.5</div>
        </div>
        <div class="item" v-for="item in aqiList">
          <div class="value">{{ aqi[item] }}</div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
      <p>
        Healthy people will experience reduced endurance in activities. There may be strong irritations and symptoms and may trigger other illnesses. Elders and the sick should remain indoors and avoid exercise. Healthy individuals should avoid outdoor activities.
      </p>
    </div>
  </article>
</template>

<script>
import { AQI as AQIConfig } from '../config/aqi'
import Basic from './WeatherBasic.vue'
import AQI from './WeatherAQI.vue'

export default {
  name: 'weather',

  components: { Basic, AQI },

  props: ['now', 'aqi'],

  data(){
    const styleObj={
      background: 'lightgreen'
    }

    return {
      styleObj,
      aqiList: ['pm10', 'co', 'no2', 'o3', 'so2']
    }
  },

  computed: {
    aqilist(){
      return 
    }
  }
}

</script>


<style lang="stylus">
.weather
  position relative
  overflow hidden
  padding 30px 20px
  border 1px solid #ccc
  border-radius 3px
  color #fff
  
  .bg
    position absolute
    top -10px
    left -10px
    z-index -1
    width 100%
    height 100%
    padding 10px
    background no-repeat 50% 50% url('/public/images/s_2.jpg')
    background-size cover
    filter blur(5px)

  .cover
    position absolute
    top 0
    left 0
    z-index -1
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.2)
  
  h3
    margin-top 10px
    font-size 24px
    font-weight normal
  .aqi
    display inline-block
    margin-bottom 30px
    padding 0 20px
    line-height 48px
    border-radius 24px
    background rgba(0, 255, 0, 0.25)
    text-align center
    font-size 2em
    font-weight normal
  
  .aqi-list
    .item
      display inline-block
      width 90px
      height 40px
      margin-right 15px
      padding 25px 0
      text-align center
      border-radius 50%
      background rgba(255, 255, 255, 0.2)
      .text
        text-transform uppercase
      .value
        margin-bottom 10px
        font-size 24px
  
  p
    font-size 16px
    margin 2em 0 0
    line-height 1.5
  
</style>