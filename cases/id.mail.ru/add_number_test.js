import account from '../../steps/account';
import contacts from '../../steps/contacts';

describe('test adding phone number', () => {

	it('log in', () => {
		account.auth();
	});

	it('add Invalid Number', () => {

		contacts.render();
		contacts.addInvalidNumber();
	});

	it('add Valid Number', () => {
		contacts.render();
		contacts.addValidNumber();
	});
});
