<template>
  <div>
    <div class="grid">
      <svg width="676" height="104">
        <g transform="translate(16, 20)">
          <g v-for="w in 53" :transform="translateW(w)">
            <rect v-for="d in 7" width="10" height="10" :y="(d-1)*12" :fill="randomColor()"></rect>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aqi-grid',

  data(){
    return {
      colors:['#00e400','#ff0','#ff7e00','#f00','#99004c','#7e0023']
    }
  },

  methods:{
    translateW(w){
      return `translate(${12*w}, 0)`
    },

    randomColor(){
      let n = Math.floor(Math.random()*6)
      return this.colors[n]
    }
  }
}
</script>

<style lang="stylus">
.grid
  width 100%

</style>