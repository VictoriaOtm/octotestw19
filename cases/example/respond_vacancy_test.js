import account from '../../steps/account';
import vacancy_page from '../../steps/vacancies/vacancy';
import main from '../../steps/main';

// пример теста
describe('Respond vacancy', () => {

  it('Отклик на вакансию, если не авторизован', () => {
    const vacancy_id = process.env.VACANCY_ID;

    account.open(`http://tripway.ru.com/`);
    main.routeToVacancy(vacancy_id);

    vacancy_page.respondVacancy();

    account.waitForAccount();
  });
});
