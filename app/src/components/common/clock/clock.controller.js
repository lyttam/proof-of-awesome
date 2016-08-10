import angular from 'angular';

export default function ClockController($element, $scope) {
	
	const INTERVAL = 100;
	const FORMAT_OPTIONS = { hour: 'numeric', minute: 'numeric' };

	$scope.date = new Date();

	this.$postLink = () => {
		window.setInterval(this.incrementTime, INTERVAL);
	};

	this.incrementTime = () => {
		let milliseconds = $scope.date.getTime();
		$scope.$apply(() => {
			$scope.date.setTime(milliseconds + INTERVAL);
		});
	};

	this.format = (date) => {
		return date.toLocaleTimeString();
	};
};
