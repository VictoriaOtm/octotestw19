import account from '../steps/account';
import userinfo from '../steps/userinfo';

describe('Профиль пользователя -> ', () => {
        beforeEach(() => {
                account.auth();
                userinfo.openUserinfo();
        });

        it('Ввести неправильное название города', () => {
                const WRONG_TOWN_NAME = 'qwertyuiop';
                const FORM = 'town';
                userinfo.enterAndSaveNewTown(WRONG_TOWN_NAME);
                userinfo.waitForErrorMessagesNearForm(FORM);
        });
});
