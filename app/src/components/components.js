import angular from 'angular';
import Menu from './menu/menu';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
		Menu.name,
		Home.name,
		About.name
]);

export default componentModule;
