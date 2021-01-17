const path = require('path');

module.exports = {
	entry: {
		'main': './src/index.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
			{
				test: /\.css$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: '/'
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '/'
						}
					},
					'html-escape-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '/static/[name].[ext]'
				}
			}
		]
	},

	resolveLoader: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'loaders')
		]
	}
};
