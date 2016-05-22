import angular from 'angular';
import Menu from './menu/menu';
import Home from './home/home';
import About from './about/about';
import Resume from './resume/resume';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
		Menu.name,
		Home.name,
		About.name,
		Resume.name,
		Contact.name
]);

export default componentModule;
