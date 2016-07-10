import angular from 'angular';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
import 'babel-polyfill';
import Components from './components/components';
import AppComponent from './app.component';
import './styles/img/8bit-linkedin.png';
import './styles/img/8bit-gmail.png';
import './styles/img/8bit-github.png';
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
