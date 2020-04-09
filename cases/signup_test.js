import signup from '../steps/signup';

describe('test id', () => {

    it('Зарегистрировать работодателя', () => {
        signup.open('http://tripway.ru.com/signupemployer');
        signup.signup();
    });
});