import template from './experience.html';
import ExperienceController from './experience.controller';

let experienceComponent = {
	template,
	controller: ['$scope', '$element', ExperienceController],
	controllerAs: 'experience'
};

export default experienceComponent;
