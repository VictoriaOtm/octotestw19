import account from '../../steps/account';

describe('login', () => {

	it('Авторизоваться и открыть настройки профиля', () => {
		account.auth();
		account.openSettings();
	});
});
