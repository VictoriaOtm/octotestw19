import authorization from '../steps/authorization';
import letters from '../steps/letters/index';


describe('test id', () => {
	it('Авторизация', () => {
		authorization.auth();
	});
});

