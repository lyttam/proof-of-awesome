var webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
	
	config.set({
		
		basePath: '',

		preprocessors: {
			'dist/bundle.js': ['webpack'],
//			'../app/src/**/*.html': ['ng-html2js'],
			'app/test/**/*.js': ['babel', 'webpack'],
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true
		},

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
//			'app/src/**/*.html',
			'dist/bundle.js',
			'app/test/**/*.js'
		],

		frameworks: ['mocha', 'chai'],

		browsers: ['Chrome', 'Firefox'],

		reporters: ['story']
	});
};
