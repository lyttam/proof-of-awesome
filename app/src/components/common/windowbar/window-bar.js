import angular from 'angular';
import windowbarComponent from './window-bar.component';
import template from './window-bar.html';
import WindowbarController from './windowbar.controller';

let windowbarModule = angular.module('windowbar', [])
//	.component('windowbar', windowbarComponent);
	.directive('windowbar', () => {
		return {
			template,
			restrict: 'AE',
			controller: ['$attrs', '$scope', function WindowbarController($attrs, $scope) {
				let vm = this;
				vm.title = $scope.$eval($attrs.title).value;
			}],
			controllerAs: 'windowbar',
			scope: {
				title: '='
			}
		};
	});

export default windowbarModule;
