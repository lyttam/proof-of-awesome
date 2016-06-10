import template from './main.html';

let AppComponent = {
	template,
	restrict: 'E',
	$routeConfig: [
		{ path: '/', name: 'Home', component: 'home', useAsDefault: true },
		{ path: '/about/', name: 'About', component: 'about' },
		{ path: '/experience/', name: 'Experience', component: 'experience' },
		{ path: '/skill/', name: 'Skill', component: 'skill' },
		{ path: '/contact/', name: 'Contact', component: 'contact' }
	]
};

export default AppComponent;
