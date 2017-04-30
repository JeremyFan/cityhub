import { router, app } from './app'

export default context => {

	return new Promise((resolve, reject) => {
		/*
		// store data
		// let store = {}
		let components = app.$options.components
		let componentList = Object.keys(components).map(name => components[name])
		*/

		let store = {}

		router.push(context.url)
		router.onReady(()=>{
			const matchedComponents = router.getMatchedComponents()

			if (!matchedComponents.length) {
			  reject({ code: 404 })
			}

			Promise
				.all(matchedComponents.map(component => {
					return component.preFetch && component.preFetch({
						store,
						route: router.currentRoute
					})
				}))
				.then(data => {
					console.log('data pre-fetch')
					// 这里设置state，页面中会获得一个全局__INITIAL_STATE__对象
					context.state = store
					resolve(app)
				})
		})
	})
}