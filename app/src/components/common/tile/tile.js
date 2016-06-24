import angular from 'angular';
import tileComponent from './tile.component';

let tileModule = angular.module('tile', [])
	
	.component('tile', tileComponent);

export default tileModule;
