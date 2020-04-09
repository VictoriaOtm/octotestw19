import DefaultSteps from './default';
import page from '../pages/search_results';

class SearchSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
	check_containing(value) {
        console.log(this.page.getResults(value));
    }
}

export default new SearchSteps();
