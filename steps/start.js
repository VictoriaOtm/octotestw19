import DefaultSteps from './default';
import page from '../pages/start';

class StartSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  login() {
    this.page.fillLoginForm();
  }

  exitModal() {
    this.page.exitModal();
  }

  toggleImage() {
    this.page.toggleImage();
  }

  makeFavorite() {
    this.page.makeFavorite();
  }
}

export default new StartSteps();