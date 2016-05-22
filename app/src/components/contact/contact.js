import angular from 'angular';
import contactComponent from './contact.component';

let contactModule = angular.module('contact', [])

	.component('contact', contactComponent);

export default contactModule;
