import DefaultSteps from "./default";
import page from "../pages/chat";

const assert = require('assert').strict;

class ChatSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openChat(){
        this.open(browser.options.baseUrl + "/chats");
        this.page.waitForChat()
    }

    writeSupMsg(msg) {
        this.page.openSupChat();

        const beforeAdd = this.page.getMsgCount(msg);

        this.page.fillMsg(msg);
        this.page.submitMsg();

        this.page.waitNewMsg();

        const afterAdd = this.page.getMsgCount(msg);

        assert(afterAdd - 1 === beforeAdd);
    }

    writeSupEmoji(emoji) {
        this.page.openSupChat();

        const beforeAdd = this.page.getMsgCount(emoji);

        this.page.showEmojiMenu();

        this.page.pickEmoji()

        this.page.submitMsg();

        this.page.waitNewMsg();

        const afterAdd = this.page.getMsgCount(emoji);

        assert(afterAdd - 1 === beforeAdd);
    }

}

export default new ChatSteps();
