import films from '../steps/films/genreFilm';
import account from '../steps/account';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизаци

	it('Добавить фильм в список', () => {
		account.auth();

        films.openFilmPage();
        
        const name = "list-name-1";
        films.createList(name);
        films.checkListName(name)
	})
});