import angular from 'angular';

let chai = require('chai');

describe('app module', () => {
	var $compile,
		$rootScope;

	beforeEach(angular.module('app'));

	beforeEach(inject( (_$compile_, _$rootScope_) => {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('renders the app component', () => {
		var element = $compile('<app></app>')($rootScope);

		$rootScope.digest();

		console.log(element.html());
		expect(element.html()).to.have.string('<div class="app"><menu></menu><ng-outlet></ng-outlet></div>');
	});
});
