<template>
  <div id="app">
    <header>
      <router-link to="/" tag="div" class="title">
        <a href="#"></a>
        <span>CityHub</span>
        <p>Focus on city health and happiness</p>
      </router-link>
    </header>
    <router-view class="view"></router-view>
    <footer>
      <p class="copyright">
        Build by Jeremy Fan, 2017
      </p>
    </footer>
  </div>
</template>

<style lang="stylus">
body
  margin 0
  font 14px/1 Helvetica, arial, sans-serif
  
  // background #000
  
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
      width 24px
      height 24px
      vertical-align middle
      background no-repeat url('/public/logo.png')
      background-size 100%
    span
      height 24px
      line-height 28px
      display inline-block
      vertical-align middle
      font-size 16px
      letter-spacing .1em
    p
      text-transform uppercase

footer
  margin 20px auto
  font-size 12px
  color #999
  text-align center
</style>