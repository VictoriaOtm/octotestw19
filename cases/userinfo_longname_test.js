import account from '../steps/account';
import userinfo from '../steps/userinfo';

describe('Профиль пользователя -> ', () => {
        beforeEach(() => {
                account.auth();
                userinfo.openUserinfo();
        });
        
        it('Ввести длинную фамилию', () => {
                const LONG_SURNAME = 'veryveryveryveryveryveryveryveryveryveryveryveryveryverylong';
                const FORM = 'surname';
                userinfo.enterAndSaveNewSurname(LONG_SURNAME);
                userinfo.waitForErrorMessagesNearForm(FORM);
        });
});
