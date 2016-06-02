var webpack = require('webpack');

module.exports = function(config) {
	
	config.set({
		
		preprocessors: {
			'app/src/**/*.js': [
//						 'babel', 
						 'webpack', 'sourcemap'],
			'app/test/**/*.js': [
//						  'babel', 
						  'webpack', 'sourcemap']
		},

//		babelPreprocessor: {
//			options: {
//				presets: ['es2015'],
//				sourceMap: 'inline'
//			},
//			filename: function(file) {
//				return file.originalPath.replace(/\.js$/, '.es5.js');
//			},
//			sourceFileName: function(file) {
//				return file.originalPath;
//			}
//		},

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' }
				]
			}
		},

		basePath: '',

		files: [
			'app/test/**/*.js'
		],

		frameworks: ['mocha'],

		browsers: ['Chrome', 'Firefox'],

		reporters: ['story']
	});
};
