import auth from "../steps/auth";

describe('test id', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию

    it('Авторизоваться и открыть главную страницу', () => {
        auth.open('https://virusmusic.fun/login');
        auth.login();
    });
});
