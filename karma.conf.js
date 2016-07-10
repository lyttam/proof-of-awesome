var webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
	
	config.set({
		
		basePath: '',

		preprocessors: {
//			'app/src/main.js': ['webpack'],
	//		'dist/bundle.js': ['webpack'],
//			'../app/src/**/*.html': ['ng-html2js'],
			'app/test/**/*.js': ['babel', 'webpack'],
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true
		},

		plugins: [
			require('karma-webpack'),
			require('karma-babel-preprocessor'),
			require('karma-mocha'),
			require('karma-chai'),
			require('karma-chrome-launcher'),
			require('karma-firefox-launcher'),
			require('karma-phantomjs-launcher'),
			require('karma-story-reporter')
		],

		files: [
			'node_modules/angular/angular.js',
//			'dist/bundle.js',
			'node_modules/angular-mocks/angular-mocks.js',
//			'app/src/**/*.html',
			'dist/bundle.js',
			'app/test/**/*.js'
		],

		frameworks: ['mocha', 'chai'],

		browsers: [
//			'Chrome', 
//			'Firefox',
			'PhantomJS'
		],

		phantomjsLauncher: {
			exitOnResourceError: true
		},

		reporters: ['story']
	});
};
