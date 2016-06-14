import Windowbar from './windowbar/window-bar';
import Banner from './banner/banner';

let commonComponentModule = angular.module('app.commonComponents', [
		Windowbar.name,
		Banner.name
]);

export default commonComponentModule;
