<template>
  <div>
      <h3>citylist</h3>
      <router-link to="/city/beijing">
        {{ city }}
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'home-view',

  data(){
    return {
      city:'Beijing'
    }
  }
}
</script>

<style lang="stylus">
</style>