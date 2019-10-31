import DefaultSteps from './default';
import page from '../pages/signature';
import assert from 'assert'

class SignatureSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    fillForm(name, signature) {
        this.page.fillName(name);
        this.page.fillSignature(signature);
    }

    checkForm(name, signature) {
        assert(name === this.page.getName(), "Form has unexpected name");
        assert(signature === this.page.getSignature(), "Form has unexpected signature");
    }

    saveForm() {
        this.page.saveForm();
    }

    waitForSignature() {
        this.page.waitForContainer();
    }
}

export default new SignatureSteps();
