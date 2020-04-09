import account from "../../steps/account";
import profile from "../../steps/profile";

describe('test id2', () => {

    beforeEach(function(){
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Сменить фамилию', () => {
        profile.open('https://id.mail.ru/profile');
        profile.waitForAccount();
        profile.changeLastName();
        profile.sumbit();
    });
});