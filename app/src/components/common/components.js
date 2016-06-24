import Windowbar from './windowbar/window-bar';
import Banner from './banner/banner';
import Tile from './tile/tile';

let commonComponentModule = angular.module('app.commonComponents', [
		Windowbar.name,
		Banner.name,
		Tile.name
]);

export default commonComponentModule;
