import search from '../steps/searching';
import login from "../steps/login";

describe('test id', () => {

    beforeEach(() => {
        login.open('http://tripway.ru.com/signin');
        login.login();
    });

    it('Поиск вакансии', () => {
        search.open('http://tripway.ru.com');
        search.findResume();
        search.checkResult();
    });
});