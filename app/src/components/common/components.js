import Windowbar from './windowbar/window-bar';
import Banner from './banner/banner';
import Tile from './tile/tile';
import Clock from './clock/clock';

let commonComponentModule = angular.module('app.commonComponents', [
		Windowbar.name,
		Banner.name,
		Tile.name,
		Clock.name
]);

export default commonComponentModule;
