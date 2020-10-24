import account from '../../steps/account';

describe('test id', () => {

	it('Авторизоваться и открыть настройки профиля', () => {
		account.auth();
		account.openSettings();
	});
});
