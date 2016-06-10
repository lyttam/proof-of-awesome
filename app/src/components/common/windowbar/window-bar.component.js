import template from './window-bar.html';
import WindowbarController from './windowbar.controller';

let windowbarComponent = {
	template,
	restrict: 'E',
	controller: ['$attrs', '$scope', WindowbarController],
	controllerAs: 'windowbar',
	scope: {
		title: '='
	}
};

export default windowbarComponent;
