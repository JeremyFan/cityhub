const fs = require('fs')
const path =require('path')
const webpack = require('webpack')
const webpackServerConfig = require('./webpack.server.config')


module.exports = function(app, callback) {
	let template
	let bundle

	const tmplPath = './index.html'
	if (fs.existsSync(tmplPath)) {
		template = fs.readFileSync(tmplPath, 'utf-8')
	}

	const serverCompiler = webpack(webpackServerConfig)

	serverCompiler.watch({}, (err, stats) => {
		if (err) throw err

		const bundlePath = path.join(webpackServerConfig.output.path, 'vue-ssr-bundle.json')
		bundle = JSON.parse(fs.readFileSync(bundlePath, 'utf-8'))
		
		callback(bundle, template)
	})

}