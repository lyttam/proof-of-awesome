import angular from 'angular';
import bannerComponent from './banner.component';

let bannerModule = angular.module('banner', [])
	
	.component('banner', bannerComponent);

export default bannerModule;
