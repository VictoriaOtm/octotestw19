import DefaultSteps from './default';
import page from '../pages/viewer';

class ViewerSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  zoomIn() {
    this.page.zoomIn();
  }

  zoomOut() {
    this.page.zoomOut();
  }

  openRemoveModal() {
    this.page.openRemoveModal();
  }
}

export default new ViewerSteps();