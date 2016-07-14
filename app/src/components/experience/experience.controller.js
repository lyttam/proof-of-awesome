/* @ngInject */
export default function ExperienceController($scope) {
	$scope.showCareer = true;
	$scope.career = 'infosec';

	this.toggleCareer = (show) => {
		$scope.showCareer = show ? true : false;
		console.log(vm);
	}

	this.selectCareer = (career) => {
		$scope.career = career;
	}


};
