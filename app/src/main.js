import angular from 'angular';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
import Components from './components/components';
import AppComponent from './app.component';
import './styles/main.scss';

console.log(Components.name);
angular.module('app', [
		'ngComponentRouter',
		'menu',
		'home',
		'about',
		'resume',
		'contact'
	])

	.config(($locationProvider) => {
		"ngInject";
		$locationProvider.html5Mode(true)
			.hashPrefix('!');
	})

	.value('$routerRootComponent', 'app')

	.component('app', AppComponent);
