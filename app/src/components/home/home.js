import angular from 'angular';
import homeComponent from './home.component';
import commonComponents from '../common/components';

let homeModule = angular.module('home', [
		'banner'
	])

	.component('home', homeComponent);

export default homeModule;
