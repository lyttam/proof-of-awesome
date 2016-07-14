import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'babel-polyfill';
import Components from './components/components';
import AppComponent from './app.component';
import homeTemplate from './components/home/home.html';
import experienceTemplate from './components/experience/experience.html';
import skillTemplate from './components/skill/skill.html';
import contactTemplate from './components/contact/contact.html';
import './styles/img/8bit-linkedin.png';
import './styles/img/8bit-gmail.png';
import './styles/img/8bit-github.png';
import './styles/main.scss';
import './styles/css/fontello.css';

const app = angular.module('app', [
		uirouter,
		'navMenu',
		'home',
		'about',
		'experience',
		'skill',
		'contact',
		'functionMenu',
		'styleLibrary'
	])

	.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				component: 'home'
			})
			.state('experience', {
				url: '/experience',
				component: 'experience'
			})
			.state('skill', {
				url: '/skill',
				component: 'skill'
			})
			.state('contact', {
				url: '/contact',
				component: 'contact'
			});
	}])

//	.value('$routerRootComponent', 'app')

	.component('app', AppComponent);
