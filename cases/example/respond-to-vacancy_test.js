import vacanciesPage from "../../steps/vacancies";
import account from '../../steps/login';



describe('respond-to-vacancy-test', () => {
    beforeEach(() => { account.auth(); })

	it('Откликнуться на вакансию', () => {
        vacanciesPage.open('http://tripway.ru.com/');
        vacanciesPage.waitForVacancyForm();
        vacanciesPage.respondToVacancy();
	});
});