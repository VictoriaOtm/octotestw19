import login from '../../steps/login';
import register from '../../steps/register';
import account from '../../steps/account';

describe('Работа со страницей логина в мобильном календаре', () => {

    beforeEach(function() { 
        browser.deleteCookie();
    });

    it('Должен произойти вход', () => {
        login.open('https://m.calendar.mail.ru/login/');
        login.login();
    });
    
    it('Должен происходить редирект на страницу регистрации', () => {
        login.open('https://m.calendar.mail.ru/login/');
        login.register();
        register.waitForRegister();
    });

    it('Должен произойти редирект на страницу логина почты при неправильном Email', () => {
        login.open('https://m.calendar.mail.ru/login/');
        login.loginIncorrectEmail();
        account.waitForAccount();
    });
});
