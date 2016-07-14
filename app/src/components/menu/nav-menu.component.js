import template from './nav-menu.html';
import NavMenuController from './nav-menu.controller';

let NavMenuComponent = {
	template,
	restrict: 'E',
	controller: ['$element', '$state', NavMenuController]
};

export default NavMenuComponent;
