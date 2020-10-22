import auth from "../steps/auth";

describe('test id', () => {
    it('Авторизоваться и открыть главную страницу', () => {
        auth.open('https://virusmusic.fun/login');
        auth.login();
    });
});
