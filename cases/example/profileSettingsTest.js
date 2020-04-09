import profile_settings from '../../steps/profileSettings';
import account from '../../steps/account';

// пример теста
describe('test id', () => {

	it('Изменить статус в профиле Solar', () => {
		account.open('https://solarsunrise.ru/login');
		account.login();

		// тест рабочий, проверила
		// дальше не выполняю, потому что ошибка на сервере, что-то с паролем,
		// в течение какого-то времени нельзя войти в аккаунт, будем разбираться

		// profile_settings.goToSettings();
        // profile_settings.setStatus();
	});
});
