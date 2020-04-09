import films from '../steps/films/genreFilm';
import account from '../steps/account';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизаци

	it('Добавить рецензию', () => {
        account.auth();

        account.open('https://cinsear.ru/search?films');
		films.waitForList();
        films.openFilm();
        
        const title = "Test_review_review-2"
        const body = "Test_review_body_body-2"
        films.createReview(title,body);
        films.checkreview(title, body);
	})
});
