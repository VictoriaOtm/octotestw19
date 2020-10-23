import account from '../../steps/account';
import cloudRecommend from '../../steps/cloud_recommend';

describe('cloud_recommendations', () => {

    before(() => {
		account.auth();
		cloudRecommend.openCloudRecommendations();

    });

	it('Авторизованным попробовать перейти по рекомендации ISQ', () => {
		cloudRecommend.checkIsq();
	});

	it('Авторизованным попробовать перейти по рекомендации Disk-O', () => {
		cloudRecommend.checkDiskO();
	});

	it('Авторизованным попробовать перейти по рекомендации Screenshoter', () => {
		cloudRecommend.checkclickScreenshoter();
	});
});
