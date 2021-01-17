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
				test: /\.png$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '/'
						}
					}
				]
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
