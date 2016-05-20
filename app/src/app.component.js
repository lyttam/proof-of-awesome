import template from './main.html';

let AppComponent = {
	template,
	restrict: 'E',
	$routeConfig: [
		{ path: '/home', name: 'Home', component: 'home', useAsDefault: true },
		{ path: '/about', name: 'About', component: 'about' }
	]
};

export default AppComponent;
