import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('test id', () => {
    it('Зарегистироваться некорректно', () => {
        account.open('https://fwork.live/signup');
        account.fail_signup();
    });
});
