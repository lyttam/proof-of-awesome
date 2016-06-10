import angular from 'angular';
import Menu from './menu/menu';
import Home from './home/home';
import About from './about/about';
import Experience from './experience/experience';
import Skill from './skill/skill';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
		Menu.name,
		Home.name,
		About.name,
		Experience.name,
		Skill.name,
		Contact.name
]);

export default componentModule;
