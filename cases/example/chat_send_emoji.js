import account from "../../steps/account";
import chat from "../../steps/chat";



// Need global emoji Map: "🍕" -> emojiId_7
describe('test id', () => {

    beforeEach(() => {
        account.auth()
    })

    it('Отправка emoji в службу поддержки', () => {
        chat.openChat();
        chat.writeSupEmoji("🍕");
    });

});