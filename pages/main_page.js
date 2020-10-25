import DefaultPage from "./default";


class MainPage extends DefaultPage {
    constructor() {
        super('main', '[data-test-id=main-app-read]')
    }

    get locators() {
        return {
            track: '[class="m-track-image"]',
            trigger: '[class*="trigger-button"]',
            player: '[class="l-player l-player-visible"]',
            pause: '[src="/static/img/icons/pause.svg"]',
        }
    }

    playTrack() {
        this.page.waitForVisible(this.locators.track);
        this.page.click(this.locators.track);
    }

    containsPause() {
        this.page.waitForVisible(this.locators.pause);
    }

    getPlayerPos(){
        this.page.waitForVisible(this.locators.player);
        return $(this.locators.player).getAttribute('style');
    }

    unwrapPlayer() {
        this.page.waitForVisible(this.locators.trigger);
        this.page.click(this.locators.trigger);
    }
}

export default new MainPage();
