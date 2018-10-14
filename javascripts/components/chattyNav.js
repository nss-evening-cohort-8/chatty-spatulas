import { printToDom } from '../helpers/util.js';

const users = [ 'Mohammad', 'Lance', 'Marco', 'Maggie' ];

const userPopulate = () => {
	let domString = '';
	domString += `<option selected id="none">Select User</option>`;
	for (let i = 0; i < users.length; i++) {
		domString += `<option id="${users[i]}-user">${users[i]}</option>`;
	}
	printToDom(domString, 'user-selected');
};

export { userPopulate };
