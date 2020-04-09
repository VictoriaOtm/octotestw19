import login from '../steps/login';

// пример теста
describe('test id', () => {

	it('Авторизироваться', () => {
		login.open('http://tripway.ru.com/signin');
		login.login();
	});
});
