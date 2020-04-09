import login from '../../steps/login';
import subscribe from '../../steps/subscriptto'

describe('Subscribe', () => {
    // beforeEach(account.auth);    // не робит:( this.open is not a function

	it('Подписаться', () => {
        login.auth();
        subscribe.open('https://solarsunrise.ru/users/testR');
        subscribe.subscribe();
    });
    
    it('Отписаться', () => {
        // login.auth();
        subscribe.open('https://solarsunrise.ru/users/testR');
        subscribe.unsubscribe();
	});
});
