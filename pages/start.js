import DefaultPage from "./default";

class StartPage extends DefaultPage {
  constructor() {
    super('start', '[class=page-main]')
  }

  get locators() {
    return {
      signInButton: '[data-action="signin-click"]',
      exitModalButton: '[class^="Dialog__close"]',
      fileElement: 'div[data-name="link"]',
      zoomElement: '[class=b-view__zoom]',
      checkBox: '[class=b-checkbox__box]',
      favoritesButton: '[data-name="addtofavorites"]'
    }
  }

  exitModal() {
    this.page.waitForVisible(this.locators.exitModalButton);
    this.page.click(this.locators.exitModalButton);
  }

  toggleImage() {
    this.page.waitForVisible(this.locators.fileElement);
    this.page.click(this.locators.fileElement);
  }

  selectFile() {
    this.page.waitForVisible(this.locators.fileElement);
    this.page.waitForVisible(this.locators.checkBox);
    this.page.click(this.locators.checkBox);
  }

  makeFavorite() {
    this.selectFile();
    this.favoriteClick();
  }

  favoriteClick() {
    this.page.waitForVisible(this.locators.favoritesButton);
    this.page.click(this.locators.favoritesButton);
  }
}

export default new StartPage();