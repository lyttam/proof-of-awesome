import { bind } from 'mousetrap';

export default function NavMenuController($element, $state) {
	this.$postLink = () => {
		let items = $element.find('a');

		for (let key in items) {
			if (items[key].getAttribute) {
				let accessKey = items[key].getAttribute('accesskey');
				let dest = items[key].getAttribute('ui-sref');
				
				bind(accessKey, () => {
					$state.go(dest);
				});
			}
			
		};
	};
};
