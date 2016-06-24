import template from './tile.html';
import TileController from './tile.controller';

let tileComponent = {
	template,
	controller: ['$scope', TileController],
	controllerAs: 'tile',
	bindings: {
		name: '@',
		text: '@'
	}
};

export default tileComponent;

