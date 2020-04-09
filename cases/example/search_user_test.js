import login from '../../steps/login';
import header from '../../steps/header'
import search_results from '../../steps/search_results'

describe('SSearch', () => {
    // beforeEach(login.auth);  // не робит:( this.open is not a function

	it('Найти юзера', () => {
        login.auth();
        header.open('https://solarsunrise.ru/');
        header.search('testR', 'user');
        search_results.check_containing('testR');
    });
});
