<template>
  <div id="app">
    <header>
      <div class="title">
        <router-link to="/">CityHub</router-link>
        <p>Care for the city health and happiness</p>
      </div>
    </header>
    <router-view class="page"></router-view>
    <footer>
      <p class="copyright">
        Build by Jeremy Fan, 2017
      </p>
    </footer>
  </div>
</template>

<style lang="stylus">
@font-face{
  font-family 'lombok'
  src url('/public/fonts/Lombok.otf') format('truetype')
  font-style normal
  font-weight normal
}

body
  margin 0
  font 14px/1 Helvetica, arial, sans-serif
  
  // background #000

a
  text-decoration none
  &:hover
  &:active
  &:visited
    color #000

.page
  margin 0 80px

header
  margin 20px auto 50px
  
  .title
    width 350px
    margin 0 auto
    text-align center
    font-weight normal
    
    // color #fff
    a
      display inline-block
      width 110px
      height 24px
      line-height 20px
      background no-repeat left url('/public/logo.png')
      background-size auto 100%
      text-align right
      font-family 'Lombok', Helvetica, arial, sans-serif
      font-size 20px
    p
      text-transform uppercase

footer
  margin 20px auto
  font-size 12px
  color #999
  text-align center
</style>