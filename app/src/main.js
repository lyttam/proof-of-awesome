import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './components/app.component';
import './styles/main.scss';

angular.module('app', [
		uiRouter,
		Components.name
	])
	.config(($locationProvider) => {
		"ngInject";
		$locationProvider.html5Mode(true).hashPrefix('!');
	})
	.component('app', AppComponent);
