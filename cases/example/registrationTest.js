import register from '../../steps/registration';

// пример теста
describe('test id', () => {

	it('Зарегистрироваться в Solar', () => {
		register.open('https://solarsunrise.ru/register');
		register.register();
	});
});
