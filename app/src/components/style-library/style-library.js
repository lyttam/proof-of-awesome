import angular from 'angular';
import styleLibraryComponent from './style-library.component';

let styleLibraryModule = angular.module('styleLibrary', [])

	.component('styleLibrary', styleLibraryComponent);

export default styleLibraryModule;
		
