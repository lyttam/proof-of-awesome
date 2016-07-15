import angular from 'angular';
import Mousetrap from 'mousetrap';

/* @ngInject */
export default function ExperienceController($scope, $element) {
	$scope.mode = 'career';
	$scope.career = 'infosec';

	this.setMode = (mode) => {
		$scope.mode = mode;
	};

	this.setCareer = (career) => {
		$scope.career = career;
	};

	this.$postLink = () => {
		this.bindButtonEvents();
		this.bindPickerEvents();
	};

	this.bindButtonEvents = () => {
		let $btns = $element[0].querySelectorAll('nav a.button');

		for (let i = 0; i < $btns.length; i++) {
			let accessKey = $btns[i].getAttribute('accesskey');
			let mode = $btns[i].getAttribute('data-mode');

			Mousetrap.bind(accessKey, () => {
				$scope.$apply(() => {
					this.setMode(mode);
				});
			});
		}
	};

	this.bindPickerEvents = () => {
		let $picker = $element[0].querySelector('ul#career-picker');
		Mousetrap($picker).bind('up', this.selectPrevCareer);
		Mousetrap($picker).bind('down', this.selectNextCareer);
	};

	this.selectNextCareer = (e) => {
		this.selectCareer(e, 1);
	};

	this.selectPrevCareer = (e) => {
		this.selectCareer(e, -1);
	};

	this.selectCareer = (e, delta) => {
		let $picker = e.target;
		let $items = $picker.getElementsByTagName('li');
		let i = 0;

		for (i; i < $items.length; i++) {
			if ($items[i].className.search('selected') > -1) {
				break;	
			}
		}
		let newIndex = (i + delta + $items.length) % $items.length;

		$scope.$apply(() => {
			this.setCareer($items[newIndex].getAttribute('data-career'));
		});
	};
};
