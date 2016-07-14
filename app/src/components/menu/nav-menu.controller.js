import angular from 'angular';
import { bind } from 'mousetrap';

export default function NavMenuController($element, $state) {
	this.$postLink = () => {
		let items = $element.find('a');

		for (let key in items) {
			if (items[key].hasOwnProperty('getAttribute')) {
				let accessKey = items[key].getAttribute('accesskey');
				let dest = items[key].getAttribute('ui-sref');
				bind(accessKey, () => {
					console.log(accessKey);
					console.log(dest);
					$state.go(dest);
				});
			}
			
		};
	};
};
