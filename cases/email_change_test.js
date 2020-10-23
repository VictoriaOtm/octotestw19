import account from '../steps/account';
import settings from '../steps/settings';

describe('Смена емейла', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Изменить емейл', () => {
		settings.changeEmail('lol@kek.ru');
		settings.checkEmail('lol@kek.ru');
	});
});
