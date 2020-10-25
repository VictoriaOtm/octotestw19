import DefaultSteps from "./default";
import mainPage from "../pages/main_page";

import assert from "assert";

class MainPageSteps extends DefaultSteps {
    constructor() {
        super(mainPage);
    }

    playTrack() {
        this.page.playTrack()
        this.page.containsPause();
    }

    unwrapPlayer() {
        const before = this.page.getPlayerPos();
        this.page.unwrapPlayer();
        const after = this.page.getPlayerPos();
        // player wrapped
       assert.notEqual(before, after);
    }
}

export default new MainPageSteps();
