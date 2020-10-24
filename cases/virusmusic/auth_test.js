import account from "../../steps/account";


describe('auth test', () => {
    it('Авторизоваться в сервисе', () => {
        account.auth();
        account.checkLogin();
    });
});
