const webpack = require('webpack')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
const path = require('path')

module.exports = {
	target: 'node',
	devtool: '#source-map',
	entry: './entry-server.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	},
	module: {
	  rules: [
	    {
	      test: /\.vue$/,
	      loader: 'vue-loader'
	    },
	    {
	      test: /\.js$/,
	      loader: 'babel-loader',
	      exclude: /node_modules/,
	      query: {
	        presets: ['es2015']
	      }
	    },
	    {
	      test: /\.(png|jpg|gif|svg)$/,
	      loader: 'url-loader',
	      options: {
	        limit: 10000,
	        name: '[name].[ext]?[hash]'
	      }
	    }
	  ]
	},
	externals: Object.keys(require('../package.json').dependencies),
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.VUE_ENV': '"server"'
		}),
		new VueSSRPlugin()
	]
}