import DefaultSteps from './default';
import page from '../pages/user';

class SubscribeSteps extends DefaultSteps {
	constructor() {
		super(page);
	}
    
    subscribe () {
        this.page.subscribe_trusted();
    }

    unsubscribe () {
        this.page.unsubscribe_trusted();
    }
}

export default new SubscribeSteps();
