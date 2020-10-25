import DefaultSteps from "./default";
import mainPage from "../pages/main_page";

const assert = require('assert');

class MainPageSteps extends DefaultSteps {
    constructor() {
        super(mainPage);
    }

    playTrack() {
        this.page.playTrack()
        this.page.containsPause();
    }

    unwrapPlayer() {
        before, after = this.page.unwrapPlayer();
        // player wrapped
        assert.equal(before != after, true);
    }
}

export default new MainPageSteps();
