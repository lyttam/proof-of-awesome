import template from './window-bar.html';
import WindowbarController from './windowbar.controller';

let windowbarComponent = {
	template,
	restrict: 'E',
	controller: ['$scope', WindowbarController],
	controllerAs: 'windowbar',
	bindings: {
		title: '@'
	}
};

export default windowbarComponent;
