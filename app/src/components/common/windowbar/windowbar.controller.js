/* @ngInject */
export default function WindowbarController($attrs, $scope) {
	let vm = this;
	vm.title = $scope.$eval($attrs.title).value;
};

