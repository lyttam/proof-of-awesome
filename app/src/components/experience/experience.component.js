import template from './experience.html';
import ExperienceController from './experience.controller';

let experienceComponent = {
	template,
	controller: ['$scope', ExperienceController],
	controllerAs: 'experience'
};

export default experienceComponent;
