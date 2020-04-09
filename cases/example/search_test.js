import search from '../../steps/search';

describe('test id', () => {
		it('Найти фильмы по жанру', () => {
		search.open('https://cinsear.ru/search');
		search.searchByGenre('боевик');
	});

	it('Найти фильм по названию', () => {
		search.open('https://cinsear.ru/search');
		search.searchByName('Матрица');
	});
});

