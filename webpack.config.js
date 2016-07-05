var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
  devtool: 'inline-source-map',
  module: {
    loaders: [
        { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel' },
        { test: /\.html$/, loader: 'raw' },
		{ 
			test: /\.(eot|svg|ttf|woff|woff2)\?56386607$/, 
			loader: 'file', 
			query: { name: '[name].[ext]' }
		},
		{ test: /\.svg/, loader: 'svg-url-loader' },
		{ 
			test: /\.png$/, loader: 'file', 
			include: path.join(__dirname, 'app/src/styles/img'), 
			query: {name: 'img/[name].[ext]' }
			//loaders: [
			//	'file?hash=sha512&digest=hex&name=[hash].[ext]',
			//	'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
			//]
		},
		{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap') },
		{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
	]
  },
  resolveLoader: {
	root: [
		path.resolve(path.join(__dirname, 'dist'))
	]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
     template: 'app/index.html',
      inject: 'body',
    //  hash: true
      hash: false,
      favicon: 'app/src/styles/img/favicon.ico'
    }),

    new ExtractTextPlugin('[name].css')

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
//    new webpack.optimize.CommonsChunkPlugin({
//      name: 'vendor',
//      minChunks: function (module, count) {
//        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'app')) === -1;
//      }
//    })
  ]
};
