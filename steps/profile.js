import DefaultSteps from "./default";
import page from '../pages/profile';

const assert = require('assert').strict;


class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    editDescription() {
        this.page.openEditModal();
        this.page.fillDescriptionForm();
        this.page.submit();
        console.log()
        assert(this.page.getDescription(), this.page.testDescription);
    }


    editName() {
        this.page.openEditModal();
        this.page.fillNameForm();
        this.page.submit();
        assert(this.page.getName(), this.page.testName);

    }
}

export default new ProfileSteps();