import account from '../../steps/account';
import calendar from '../../steps/calendar';
import assert from "assert";

describe('Тестирование выбора рабочих дней.', () => {
    beforeEach(() => {
        account.auth();
    });

    it('При выборе хотя бы двух рабочих дней настройки успешно сохраняются.', () => {
        const isSettingsSaved = true;
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        const result = calendar.setWorkDays();
        assert.equal(result, isSettingsSaved);
    });
});