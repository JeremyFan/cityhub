const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: '#cheap-module-eval-source-map',
	entry: './src/entry-client.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		// filename: '[name].bundle.js'
		filename: 'entry-client.js'
		// filename: '[name].[chunkhash].js',
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
	}
}