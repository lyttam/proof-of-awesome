import template from './contact.html';
import ContactController from './contact.controller';

let contactComponent = {
	restrict: 'E',
	template,
	controller: ['$element', ContactController]
	//link: function postLink(scope, element, attr) {
		//let input = element.find('input')[0];
		//console.log(input);
		//input.select();
	//}
};

export default contactComponent;
