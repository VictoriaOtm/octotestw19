import account from "../../steps/account";
import chat from "../../pages/chat";

// отправка сообщения
describe('test id', () => {

    beforeEach(()=>{
        account.auth()
    })

    it('Авторизоваться и открыть первое письмо на странице', () => {

        chat.openChat();

        const msg = "someMsg"

        const msgCount = chat.checkMsg(msg)

        console.log("msgCount:", msgCount)

        chat.sendMsg(msg);

        const msgCountAfter = chat.checkMsg(msg)

        console.log("msgCountAfter:", msgCountAfter)

        if (msgCountAfter - 1 !== msgCount) {
            throw new Error('Exception message');
        }


    });
});
