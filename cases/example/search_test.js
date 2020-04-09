import search from '../../steps/search';

describe('test id', () => {
    it('Найти фильм по жанру', () => {
        search.open('https://cinsear.ru/search');
        search.searchByGenre('боевик');
    });
});
