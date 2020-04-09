import account from '../../steps/account';
import ask from '../../steps/ask';

describe('ask_question_test', () => {

    beforeEach(() => {
        account.auth();
    });

    it('Задать валидный вопрос любой категории', () => {
        ask.open('https://otvet.mail.ru/ask');
        ask.askQuestion("Зачем делать тесты?" + Math.random(),
                        "Ведь даже если всем будет больно, все будут этим пользоваться, так как альтернатив нет) 0)00))0)");
    })
});
