import vmaccount from "../../steps/vm_account";


describe('auth test', () => {
    it('Авторизоваться в сервисе', () => {
        vmaccount.auth();
    });
});
