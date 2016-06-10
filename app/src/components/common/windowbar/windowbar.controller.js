/* @ngInject */
let WindowbarController = ($attrs, $scope) => {
	let vm = this;
	vm.title = $scope.$eval($attrs.title.value);
};

export default WindowbarController;
