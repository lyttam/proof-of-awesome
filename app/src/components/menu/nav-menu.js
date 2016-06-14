import angular from 'angular';
import navMenuComponent from './nav-menu.component';

let navMenuModule = angular.module('navMenu', [])

	.component('navMenu', navMenuComponent)

	.controller('NavMenuController', ($scope) => {
		$scope.items = [
			{ 'label': 'Home' },
			{ 'label': 'About' },
			{ 'label': 'Experience' },
			{ 'label': 'Skill' },
			{ 'label': 'Contact' }
		]
	});

export default navMenuModule;
