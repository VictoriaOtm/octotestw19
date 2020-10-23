import DefaultPage from './default';

class ChatPage extends DefaultPage {

    constructor() {
        super('chat', '[id=chat_people-list]')
    }

    get locators() {
        return {
            chatSup: '[id="chat_support_btn"]',
            chatSendBtn: '[id="chat_send_message_btn"]',
            chatText: '[id="message_to_send"]',
            chatSection: '.chat_li',
            lastMsg: '[class="chat_clearfix chat_li chat_message chat_float-right  "]:last-child',
            emojiShowBtn: '[id="chat_emoji_img"]',
            emojiMenu: '[id="emoji_selector_menu"]',
            pizzaEmoji: '[id="emojiId_7"]'
        }
    }

    openSupChat (){
        this.page.click(this.locators.chatSup);
        this.page.waitForVisible(this.locators.chatSendBtn);
    }

    fillMsg(msg) {
        this.page.setValue(this.locators.chatText, msg);
    }

    submitMsg() {
        this.page.click(this.locators.chatSendBtn);
    }

    waitNewMsg() {
        this.page.waitForVisible(this.locators.lastMsg);
    }

    getMsgCount(someMsg){
        const something = browser.getText(this.locators.chatSection).toLocaleString()
        return something.split(someMsg).length - 1
    }

    waitForChat() {
        this.waitForContainer();
    }

    showEmojiMenu(){
        this.page.click(this.locators.emojiShowBtn);
        this.page.waitForVisible(this.locators.emojiMenu);
    }

    pickEmoji(){
        this.page.click(this.locators.pizzaEmoji);
    }

}

export default new ChatPage();
