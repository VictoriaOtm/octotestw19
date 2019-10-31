import DefaultPage from './default';

class ViewerPage extends DefaultPage {
  constructor() {
    super('viewer', 'body')
  }

  get locators() {
    return {
      zoomInElement: '[class="b-view__zoom js-viewZoom b-view__zoom_available"]',
      zoomOutElement: '[class="b-view__zoom js-viewZoom b-view__zoom_available b-view__zoom_out"]',
      removeButton: '[data-name="remove"]',
      removeButtonInModal: '[class="btn btn_main btn_neighboring "]',
      removeModal: '[class="b-layer__container"]'
    }
  }

  zoomIn() {
    this.waitForContainer();
    this.page.waitForVisible(this.locators.zoomInElement, 20000);
    this.page.click(this.locators.zoomInElement);
  }

  zoomOut() {
    this.page.waitForVisible(this.locators.zoomOutElement);
    this.page.click(this.locators.zoomOutElement);
  }

  openRemoveModal() {
    this.page.waitForVisible(this.locators.removeButton);
    this.page.click(this.locators.removeButton);
    this.page.waitForVisible(this.locators.removeModal);
    this.page.waitForVisible(this.locators.removeButtonInModal);
    this.page.click(this.locators.removeButtonInModal);
  }

  makeFavorite() {

  }
}

export default new ViewerPage();