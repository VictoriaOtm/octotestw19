import DefaultSteps from '../default';
import page from '../../pages/cloud_recommend';

class CloudRecommendationsSteps extends DefaultSteps {
	constructor() {
		super(page);
    }

    openCloudRecommendations() {
        this.open(this.page.cloudRecomendationsUrl);
        this.page.waitForUrl(this.page.cloudRecomendationsUrl);
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
