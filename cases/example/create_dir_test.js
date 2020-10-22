import account from '../../steps/account';
import letters from '../../steps/letters/index';
import waitUntil from "webdriverio/lib/commands/waitUntil";

// пример теста
describe('test id 2', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию

    it('Создать папку и перейти в нее', () => {
        // account.open('https://account.mail.ru');
        // account.login();
        //
        // account.createDirectory("Kek");
        // waitUntil(5)
    });
});
