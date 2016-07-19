import template from './window-bar.html';
import WindowbarController from './windowbar.controller';

let windowbarComponent = {
	template,
	controller: ['$scope', '$element', WindowbarController],
	controllerAs: 'windowbar',
	bindings: {
		title: '@'
	}
};

export default windowbarComponent;
