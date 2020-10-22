import DefaultPage from './default';

class ChatPage extends DefaultPage {

    constructor() {
        super('account', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            chatSup: '[id="chat_support_btn"]',
            chatSendBtn: '[id="chat_send_message_btn"]',
            chatText: '[id="message_to_send"]',


            chatSection: '.chat_li',

        }
    }

    openChat () {

        browser.url('https://zinterest.ru/chats')
        this.page.waitForVisible(this.locators.chatSup);
        this.page.click(this.locators.chatSup);

        this.page.waitForVisible(this.locators.chatSendBtn);

    }


    sendMsg (someMsg) {

        this.page.waitForVisible(this.locators.chatSendBtn);
        this.page.setValue(this.locators.chatText, someMsg);

        this.page.click(this.locators.chatSendBtn);
        browser.pause(1000) // fix IT!

    }

    checkMsg(someMsg){
        let something = browser.getText(this.locators.chatSection).toLocaleString()
        return (something.split(someMsg).length - 1)
    }



}

export default new ChatPage();
