const express = require('express')
const setupDevServer = require('./build/setup-dev-server')
const vueServerRender = require('vue-server-renderer')
const api = require('./src/api')

const app = express()

let renderer
setupDevServer(app, (bundle, template) => {
	renderer = vueServerRender.createBundleRenderer(bundle, {
		template: template
	})
})

app.get('/', (req, res) => {
	if (!renderer) {
		return res.end('waiting...')
	}

	renderer.renderToString((err, html) => {
		if (err) console.error(err)

		res.send(html)
	})
})

app.get('/test', (req, res) => {
	api
		.request('now', {
			city: 'beijing'
		})
		.then((data) => {
			res.send(data)
		})
		.catch((error) => {
			console.log(error)
		})
})

const port = process.env.PORT || 8005
app.listen(port, () => {
	console.log(`sailing on localhost:${port}`)
})