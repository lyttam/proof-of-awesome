export default function WindowbarController($scope, $element) {
	let vm = this;
	vm.title = $scope.windowbar.title;

	this.$postLink = () => {
		let btn = $element[0].querySelector('a');
		btn.focus();
	};
};

