const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			}
			
		]
	},
	plugins: [
		// make sure to include the plugin for the magic
		new VueLoaderPlugin()
	],
	mode: 'production'
}



