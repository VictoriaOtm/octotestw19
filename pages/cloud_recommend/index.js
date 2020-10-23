import DefaultPage from '../default';

class CloudRecommendationPage extends DefaultPage {
    constructor() {
        super('recommendations', '.Showcase__root--2hvl6');
    }

    get locators () {
        return {
            screenshoter: 'a[href^="https://apps.apple.com/ru/app/screenshoter-mail-ru/"]',
            diskO: 'a[href^="https://trk.mail.ru/c/oea2r0"]',
            isq: 'a[href="https://trk.mail.ru/c/lmg5u5"]',
        }
    }

    get urlsAfterClick() {
        return {
            screenshoter: "https://apps.apple.com/ru/app/screenshoter-mail-ru/id1144027175?mt=12",
            diskO: "https://apps.apple.com/ru/app/disk-o-all-clouds-one-place/id1322465647?l=ru&mt=12",
            isq: "https://icq.com/",
        }
    }
    
    get location() {
        return '/recommend/';
    }

    _clickWaitCheck(locator, url) {
        const recommendationsPage = this.page.getCurrentTabId();

        this.waitRecomendationsContent();
        this.page.click(locator);

        const newTab = this.page.getTabIds().filter((tab) => tab !== recommendationsPage)[0];

        this.page.switchTab(newTab);
        this.waitForUrl(url);
        this.page.close();

        this.page.switchTab(recommendationsPage);
    }

    clickScreenshoterLink () {
        this._clickWaitCheck(
            this.locators.screenshoter,
            this.urlsAfterClick.screenshoter
        );
    }
    
    clickDiskOLink () {
        this._clickWaitCheck(
            this.locators.diskO,
            this.urlsAfterClick.diskO
        );
    }

    clickIsqLink () {
        this._clickWaitCheck(
            this.locators.isq,
            this.urlsAfterClick.isq
        )
    }

    waitRecomendationsContent () {
        this.waitForContainer();
    }
}

export default new CloudRecommendationPage();
