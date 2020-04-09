import account from "../../steps/account";
import profile from "../../steps/profile";

describe('test id4', () => {

    beforeEach(function(){
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Сменить имя', () => {
        profile.open('https://id.mail.ru/profile');
        profile.waitForAccount();
        profile.changeName();
        profile.sumbit();
    });
});