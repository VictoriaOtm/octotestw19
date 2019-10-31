import account from '../steps/account';
import userinfo from '../steps/userinfo';

describe('Профиль пользователя -> ', () => {
        beforeEach(() => {
                account.auth();
                userinfo.openUserinfo();
        });

        it('Получить подсказки при вводе города', () => {
                const TOWN_BEGIN = 'Мос';
                userinfo.enterTown(TOWN_BEGIN);
                userinfo.waitForSuggestItems();
        });
});
