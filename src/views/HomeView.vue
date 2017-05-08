<template>
  <div>
    <ul class="citylist">
      <li v-for="city in citylist" :style="{backgroundImage: 'url(/public/images/'+ city + '.jpg)'}">
        <div class="cover">
          <router-link :to="{ path: '/city/' + city }">
            {{ city }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-view',

  data(){
    return {
      citylist:[
        'beijing',
        'shanghai',
        'guangzhou',
        'shenzhen',
        'hangzhou',
        'tianjin',
        'nanjing',
        'xiamen',
        'chengdu'
      ]
    }
  }
}
</script>

<style lang="stylus">
ul
  margin 0
  padding 0
  list-style none

.citylist
  display flex
  flex-wrap wrap
  li
    float left
    width 33.3%
    height 250px
    background 50% 50% no-repeat
    background-size cover
    transition all .5s
    
    .cover
      display flex
      justify-content center
      align-items center
      width 100%
      height 100%
      background rgba(0, 0, 0, 0.5)
      opacity 0
      transition all .5s
      a
        border 1px solid #ccc
        padding 8px 16px
        color #ccc
        text-decoration none
        text-transform uppercase
        transition all .25s
        &:hover
          // background #fff
          // color #666
          border-color #fff
          color #fff
    &:hover .cover
      opacity 1
</style>