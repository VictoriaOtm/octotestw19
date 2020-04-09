import DefaultPage from "../default";

class JobPage extends DefaultPage {
	constructor() {
		super('job', '.tp-container');
	}

	get locators(){
		return {
			title: 'input[name="title"]',
			description: 'textarea[name="description"]',
			paymentAmount: 'input[name="paymentAmount"]',
			tags: 'input.input-tags__input',
			selectCategory: '//div[@class="field-group"][4]/div/div[1]//div[@class="select-custom__header"]',
			selectSpec: '//div[@class="field-group"][4]/div/div[2]//div[@class="select-custom__header"]',
			selectCountry: '//div[@class="field-group"][7]/div/div[1]//div[@class="select-custom__header"]',
			selectCity: '//div[@class="field-group"][7]/div/div[2]//div[@class="select-custom__header"]',
			catItem: '//div[@class="field-group"][4]/div/div[1]//div[@class="select-custom__dropdown"]/ul/li[1]',
			specItem: '//div[@class="field-group"][4]/div/div[2]//div[@class="select-custom__dropdown"]/ul/li[1]',
			countryItem: '//div[@class="field-group"][7]/div/div[1]//div[@class="select-custom__dropdown"]/ul/li[1]',
			cityItem:    '//div[@class="field-group"][7]/div/div[2]//div[@class="select-custom__dropdown"]/ul/li[1]',
			selectFirstItem: 'li[data-val="0"]',
			levelRadio: '//div[@class="radio-group"]/div/label[@class="radio"][3]//span[@class="radio__label"][1]',
			submitButton: 'button.btn.btn_primary[type="submit"]',
			itemToDelete: '//section[@class="item router-link"][1]',
			buttonDelete: '//section[@class="item router-link"][1]//button[@class="delete-job-action manage-btn"][1]',
			modalWindow: '.modal-window.card',
			buttonApproveDelete: '//button[@type="submit"][@class="btn btn_primary btn-m btn_fit "]',
		};
	}

	fillAddJobForm ({
						title = 'Название заказа',
						description = 'Описание достаточно длинное для удобвлетворения требований',
						paymentAmount = 100,
						tags = 'javascript'
	} = {}) {
		this.fillTitle(title);
		this.fillDescription(description);

		this.fillPaymentAmount(100);
		this.fillTags(tags);
		this.chooseLevelRadio();

		this.selectCategory();
		this.selectCountry();

		this.selectSpec();
		this.selectCity();

		this.fillDescription(description);
		this.fillTitle(title);
	}

	fillTitle(title){
		this.page.waitForVisible(this.locators.title);
		this.page.setValue(this.locators.title, title);
	}

	fillDescription(description){
		this.page.waitForVisible(this.locators.description);
		this.page.setValue(this.locators.description, description);
	}

	fillPaymentAmount(amount){
		this.page.waitForVisible(this.locators.paymentAmount);
		this.page.click(this.locators.paymentAmount);
		this.page.setValue(this.locators.paymentAmount, amount);
	}

	fillTags(tags){
		this.page.waitForVisible(this.locators.tags);
		this.page.click(this.locators.tags);
		this.page.setValue(this.locators.tags, tags);
		browser.keys(['\uE007']);
	}

	chooseLevelRadio(){
		this.page.waitForVisible(this.locators.levelRadio);
		this.page.click(this.locators.levelRadio);
	}

	selectCategory(){
		this.page.waitForVisible(this.locators.selectCategory);
		this.page.click(this.locators.selectCategory);
		this.page.waitForVisible(this.locators.catItem);
		this.page.click(this.locators.catItem);
	}

	selectSpec(){
		this.page.waitForVisible(this.locators.selectSpec);
		this.page.click(this.locators.selectSpec);
		this.page.waitForVisible(this.locators.specItem);
		this.page.click(this.locators.specItem);
	}

	selectCountry(){
		this.page.waitForVisible(this.locators.selectCountry);
		this.page.click(this.locators.selectCountry);
		this.page.waitForVisible(this.locators.countryItem);
		this.page.click(this.locators.countryItem);
	}

	selectCity(){
		this.page.waitForVisible(this.locators.selectCity);
		this.page.click(this.locators.selectCity);
		this.page.waitForVisible(this.locators.cityItem);
		this.page.click(this.locators.cityItem);
	}

	submitAdd() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

	waitForJobPage() {
		this.page.waitForVisible(".job-details")
	}

	deleteJob(){
		this.page.waitForVisible(this.locators.itemToDelete);
		browser.moveToObject(this.locators.itemToDelete).pause(500);

		this.page.waitForVisible(this.locators.buttonDelete);
		this.page.click(this.locators.buttonDelete);

		this.page.waitForVisible(this.locators.modalWindow);
		this.page.click(this.locators.buttonApproveDelete);

		this.page.waitForVisible(this.locators.itemToDelete);
	}
}

export default new JobPage();
