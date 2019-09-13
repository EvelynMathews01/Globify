const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/bundle.js'
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							'presets': ['@babel/preset-env'],
							'plugins': ['@babel/plugin-proposal-class-properties']
						}

					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules(?!(\/|\\)normalize\.css)/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}

		]
	}
};
