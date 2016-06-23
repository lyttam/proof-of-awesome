/* @ngInject */
export default function ExperienceController($scope, $element, $attrs) {
	let vm = this;
	vm.showCareer = true;
	vm.career = 'infosec';

	vm.toggleCareer = (show) => {
		vm.showCareer = show ? true : false;
	}

	vm.selectCareer = (career) => {
		console.log(career);
		vm.career = career;
	}
};
