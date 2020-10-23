import account from "../../steps/account";
import chat from "../../steps/chat";



describe('test id', () => {

    beforeEach(() => {
        account.auth()
    })

    it('Отправка сообения в службу поддержки', () => {

        chat.openChat();
        chat.writeSupMsg("hello");
    });

});
