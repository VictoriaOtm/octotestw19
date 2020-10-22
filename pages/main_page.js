import DefaultPage from "./default";

class MainPage extends DefaultPage {
    constructor() {
        super('main', '[data-test-id=main-app-read]')
    }

    get locators() {
        return {
            track: '[class="m-track-image"]',
            trigger: '[class*="trigger-button"]',
            pause: '[src="/static/img/icons/pause.svg"]',
            play: '[src="/static/img/icons/play.svg"]',
            playPauseButton: '[alt="play/pause"]',
        }
    }

    playTrack() {
        this.page.waitForVisible(this.locators.track);
        this.page.click(this.locators.track);
    }

    wrapPlayer() {
        this.page.waitForVisible(this.locators.trigger);
        this.page.click(this.locators.trigger);
    }

    containsPause() {
        this.page.waitForVisible(this.locators.pause);
    }

    pauseTrack() {
        this.page.waitForVisible(this.locators.pause);
        this.page.click(this.locators.pause);
    }

    containsPlay() {
        this.page.waitForVisible(this.locators.play);
    }

    unwrapPlayer() {
        this.page.waitForVisible(this.locators.trigger);
        this.page.click(this.locators.trigger);
    }
}

export default new MainPage();
