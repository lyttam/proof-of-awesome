import angular from 'angular';

let chai = require('chai');

describe('windowbar component', () => {
	var component;

	beforeEach(angular.mock.module('windowbar'));

	describe('windowbarController', () => {
		var $componentController,
			$scope;

		beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
			$scope = $rootScope.$new();
			$componentController = _$componentController_;
		}));

		it('sets the title', () => {
			component = $componentController(
					'windowbar',
					{title: 'test'},
					{title: 'test'});
			console.log(component);
			expect(component.title).to.equal('test');
		});
	});
});
