import template from './contact.html';
import ContactController from './contact.controller';

let contactComponent = {
	restrict: 'E',
	template,
	controller: ['$element', ContactController]
};

export default contactComponent;
