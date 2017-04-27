<template>
	<div id="app">
    <!--
		<h1>实时天气</h1>
		<weather-view ref="weather-view"></weather-view>
    -->
    <nav>
      <router-link to="/">CityHub</router-link>
    </nav>
    <div>
      <router-view class="view"></router-view>
    </div>
	</div>
</template>

<script>
  /*
	import api from './src/api'
	import WeatherView from './src/views/WeatherView.vue'

	export default {
		components: { WeatherView }
	}
  */
</script>

<style lang="stylus">

</style>