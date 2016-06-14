import angular from 'angular';
import NavMenu from './menu/nav-menu';
import Home from './home/home';
import About from './about/about';
import Experience from './experience/experience';
import Skill from './skill/skill';
import Contact from './contact/contact';
import FunctionMenu from './menu/function-menu';
import StyleLibrary from './style-library/style-library';

let componentModule = angular.module('app.components', [
		NavMenu.name,
		Home.name,
		About.name,
		Experience.name,
		Skill.name,
		Contact.name,
		FunctionMenu.name,
		StyleLibrary.name
]);

export default componentModule;
