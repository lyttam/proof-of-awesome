import template from './clock.html';
import ClockController from './clock.controller';

let clockComponent = {
	template,
	controller: ['$element', '$scope', ClockController],
	controllerAs: 'clock'
};

export default clockComponent;
