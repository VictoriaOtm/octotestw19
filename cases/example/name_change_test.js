import account from '../../steps/account';
import settings from '../../steps/settings';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Изменить имя', () => {
		settings.changeName('Лол');
		settings.checkName('Лол');
	});
});
