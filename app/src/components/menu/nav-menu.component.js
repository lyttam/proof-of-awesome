import template from './nav-menu.html';
import NavMenuController from './nav-menu.controller';

let NavMenuComponent = {
	template,
	controller: ['$element', '$state', NavMenuController]
};

export default NavMenuComponent;
