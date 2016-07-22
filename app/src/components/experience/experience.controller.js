import angular from 'angular';
import Mousetrap from 'mousetrap';

/* @ngInject */
export default function ExperienceController($scope, $element) {
	$scope.mode = 'career';
	$scope.career = 'infosec';
	this.picker = $element[0].querySelector('ul#career-picker');

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
		Mousetrap(this.picker).bind('up', this.selectPrevCareer);
		Mousetrap(this.picker).bind('down', this.selectNextCareer);
	};

	this.selectNextCareer = (e) => {
		this.selectCareer(1, e);
	};

	this.selectPrevCareer = (e) => {
		this.selectCareer(-1, e);
	};

	this.selectCareer = (delta, e) => {
		let $items = this.picker.getElementsByTagName('li');
		let i = 0;

		for (i; i < $items.length; i++) {
			if ($items[i].className.search('selected') > -1) {
				break;	
			}
		}
		let newIndex = (i + delta + $items.length) % $items.length;

		if (this.isExternalEvent(e)) {
			$scope.$apply(() => {
				this.setCareer($items[newIndex].getAttribute('data-career'));
			});
		} else {
			this.setCareer($items[newIndex].getAttribute('data-career'));
		}
	};

	this.isExternalEvent = (e) => {
		return e;
	}
};
