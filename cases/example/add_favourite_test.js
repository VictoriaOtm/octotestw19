import account from '../../steps/account';
import favorite_vacancies from '../../steps/vacancies/favorite_vacancies';
import vacancy_page from '../../steps/vacancies/vacancy';

// пример теста
describe('Favorite', () => {

  beforeEach(() => {
    account.auth();
  });
  // используйте beforeEach хук для вызова account.auth(),
  // если вы тестируете НЕ авторизацию

  it('Добавление в избранное на странице вакансии', () => {
    const vacancy_id = process.env.VACANCY_ID;

    account.open(`http://tripway.ru.com/vacancy/${vacancy_id}`);

    vacancy_page.addToFavorite();
    vacancy_page.open('http://tripway.ru.com/favorite_vacancies');

    favorite_vacancies.checkFavoriteVacancy(vacancy_id);
  });
});
