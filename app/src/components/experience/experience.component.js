import template from './experience.html';
import ExperienceController from './experience.controller';

let experienceComponent = {
	template,
	controller: ['$scope', ExperienceController],
	controllerAs: 'experience',
	bindings: {
		showCareer: '@',
		career: '@'
	}
};

export default experienceComponent;
