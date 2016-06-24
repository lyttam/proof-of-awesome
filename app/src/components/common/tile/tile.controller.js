/* @ngInject */
export default function TileController($scope) {
	let vm = this;
	vm.name = $scope.tile.name;
	vm.text = $scope.tile.text;
};
