const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const setupDevServer = require('./build/setup-dev-server')

const resolve = file => path.resolve(__dirname, file)
const serve = path => express.static(resolve(path))

const app = express()

let renderer
setupDevServer(app, (bundle, template) => {
	renderer = require('./src/renderer')(bundle, template)
})

// app.use(express.static(path.join(__dirname, 'dist')))

app.use('/dist', serve('./dist'))
app.use('/public', serve('./public'))
app.use(favicon('./public/favicon.png'))

app.get('*', (req, res) => {
	if (!renderer) {
		return res.end('waiting...')
	}

	let context = { url: req.url }
	let _errorHandler = function(error){
		console.log('render error')
		console.log(error)
	}
	let _endHandler = function(){
		console.log('render end')
		/*
		res.write(
		 `<script>window.__initial_state__=${JSON.stringify(context.state)}</script>`
		);
		*/
	}

	renderer.renderToStream(context)
		.on('error', _errorHandler)
		.on('end', _endHandler)
		.pipe(res)
})


const port = process.env.PORT || 8005
app.listen(port, () => {
	console.log(`sailing on localhost:${port}`)
})