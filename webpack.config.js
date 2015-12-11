module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'test.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel?presets[]=es2015&cacheDirectory=true'
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'url-loader',
				query: {
						limit: 8192,
						name: 'images/[name].[ext]'
				}
			}
		]
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	}
};
