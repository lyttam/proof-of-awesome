import angular from 'angular';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
import Components from './components/components';
import AppComponent from './app.component';
import './styles/main.scss';
import './styles/css/fontello.css';

const app = angular.module('app', [
		'ngComponentRouter',
		'navMenu',
		'home',
		'about',
		'experience',
		'skill',
		'contact',
		'functionMenu',
		'styleLibrary'
	])

	.config(($locationProvider) => {
		"ngInject";
		$locationProvider.html5Mode(true)
			.hashPrefix('!');
	})

	.value('$routerRootComponent', 'app')

	.component('app', AppComponent);
