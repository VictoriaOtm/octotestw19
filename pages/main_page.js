import DefaultPage from './default';

class VacancyPage extends DefaultPage {
  constructor () {
    super('main', '.main-content');
  }

  get locators () {
    return {
      container: this.container,
      seeker_guest_button: '.js-slider-seeker',
    };
  }

  clickForSeekerGuest () {
    this.page.waitForVisible(this.locators.seeker_guest_button);
    this.page.click(this.locators.seeker_guest_button);
  }

  clickToVacancyCard (vacancyId) {
    this.page.waitForVisible(`a[href='/vacancy/${vacancyId}']`);
    this.page.click(`a[href='/vacancy/${vacancyId}']`);
  }
}

export default new VacancyPage();
