import account from '../../steps/account';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть настройки профиля', () => {
		account.auth();
		account.openSettings();
	});
});
