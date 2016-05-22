import angular from 'angular';
import menuComponent from './menu.component';

let menuModule = angular.module('menu', [])

	.component('menu', menuComponent)

	.controller('MenuController', ($scope) => {
		$scope.items = [
			{ 'label': 'Home' },
			{ 'label': 'About' },
			{ 'label': 'Resume' },
			{ 'label': 'Contact' }
		]
	});

export default menuModule;
