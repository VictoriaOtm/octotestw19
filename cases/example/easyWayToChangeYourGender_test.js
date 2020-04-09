import account from "../../steps/account";
import profile from "../../steps/profile";

describe('test id3', () => {

    beforeEach(function(){
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Сменить пол', () => {
        profile.open('https://id.mail.ru/profile');
        profile.waitForAccount();
        profile.changeGender();
        profile.sumbit();
    });
});