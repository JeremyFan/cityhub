<template>
	<div>
		<h2>{{ basic.city }}</h2>
		<p>{{ basic.update.loc }}</p>

		<h2>{{ now.cond.txt }} {{ now.tmp }} ℃</h2>
		<h3>{{ wind }}</h3>
	</div>

</template>

<script>
import api from '../api'

function preFetch(store) {

	return api
		.request('now', {
			city: 'beijing'
		})
		.then(data => {
			return store['weather'] = data
		})
}

export default {
	name: 'weather-view',

	data() {
		return {
			basic: {
				city: '',
				update: {
					loc: ''
				}
			},
			now: {
				tmp: '',
				cond: {
					txt: ''
				},
				wind: ''
			}
		}
	},

	computed: {
		wind() {
			let wind = this.now.wind
			let arr = [wind.dir, wind.sc + '级', '风速' + wind.spd + 'kmph']

			return wind ? arr.join(', ') : ''
		}
	},

	preFetch,

	beforeMount() {
		let weather = store['weather']
		if (weather) {
			this.basic = weather.basic
			this.now = weather.now
		}
	}
}
</script>

<style lang="stylus">

</style>