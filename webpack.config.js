var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist');
var config = {
	entry: SRC + '/index.js',
	output: {
		filename: 'index.bundle.js',
		path: DIST 
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC,
				use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015', 'stage-0'],
						plugins: ["transform-react-display-name"]
					}
				}
				]
			},
			{
				test: /\.scss$/,
				include: SRC,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
          			use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
    		template: './src/index.html',
    		hash: true,
    		minify: {
    			collapseWhitespace: true
    		} 
		}),
		new ExtractTextPlugin('styles.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
		historyApiFallback: true,
		contentBase: DIST,
		hot: true
	}
};

module.exports = config;