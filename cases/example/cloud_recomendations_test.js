import account from '../../steps/account';
import cloudRecommend from '../../steps/cloud_recommend';

// пример теста
describe('cloud_recommendations', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

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
