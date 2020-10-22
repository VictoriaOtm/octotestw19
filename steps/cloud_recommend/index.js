import DefaultSteps from '../default';
import page from '../../pages/cloud_recommend';

class CloudRecommendationsSteps extends DefaultSteps {
	constructor() {
		super(page);
    }

    openCloudRecommendations() {
        this.open("https://cloud.mail.ru/recommend/");
        this.page.waitForUrl("https://cloud.mail.ru/recommend/");
    }
    
    checkDiskO() {
        this.page.clickDiskOLink()
    }

    checkclickScreenshoter() {
        this.page.clickScreenshoterLink()
    }

    checkIsq() {
        this.page.clickIsqLink()
    }
}

export default new CloudRecommendationsSteps();
