import DefaultSteps from "./default";
import MainPage from "../pages/main_page";

class mainPageSteps extends DefaultSteps {
    constructor() {
        super(MainPage);
    }

    playTrack() {
        this.page.playTrack()
        this.page.waitForUrl('https://virusmusic.fun/');
        this.page.containsPause();
    }

    unwrapPlayer() {
        this.page.unwrapPlayer();
    }
}

export default new mainPageSteps();