import template from './skill.html';
import SkillController from './skill.controller';

let skillComponent = {
	template,
	controller: ['$element', SkillController]
};

export default skillComponent;
