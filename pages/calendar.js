import DefaultPage from './default';

class Calendar extends DefaultPage {
    constructor() {
        super('calendar', '[id=app]')
    }

    get locators() {
        return {
            settings: '[href="?action=settings"]',
            beginWorkDay: 'input[name="start"]',
            endWorkDay: 'input[name="end"]',
            saveButton: '[class="button button_size_default button_color_primary button_submit popup-pane__button"]',
            calendarList: '[class="settings-calendar-select"]',
            selectOption: 'option[value="C46AB215-42FA-4B55-AA85-821A8C956380"]',
        }
    }

    open() {
        this.page.waitForVisible(this.locators.settings);
        this.page.click(this.locators.settings);
    }

    changeBegin() {
        this.page.waitForVisible(this.locators.beginWorkDay);
        this.page.click(this.locators.beginWorkDay);
        this.page.setValue(this.locators.beginWorkDay, "10:00");
    }

    changeEnd() {
        this.page.waitForVisible(this.locators.endWorkDay);
        this.page.click(this.locators.endWorkDay);
        this.page.setValue(this.locators.endWorkDay, "18:00");
    }

    unClickItems() {
        const firstDay = 1;
        const lastDay = 7;

        for (let i = firstDay; i <= lastDay; i++) {
            const element = 'span[name="' + i + '"]';
            this.page.waitForVisible(element);
            const attribute = this.page.getAttribute(element, 'data-checked');
            if (
                ((attribute === "false") && (i === firstDay || i === firstDay + 1))
                ||
                (attribute === "true" && i !== firstDay && i !== firstDay + 1)) {
                this.page.click(element);
            }
        }
    }

    selectCalendar() {
        this.page.waitForVisible(this.locators.calendarList);
        this.page.click(this.locators.calendarList);
        this.page.waitForVisible(this.locators.selectOption);
        this.page.click(this.locators.selectOption);
    }

    save() {
        this.page.waitForVisible(this.locators.saveButton);
        this.page.click(this.locators.saveButton);

        try {
            this.page.waitForVisible(this.container);
        } catch(error) {
            console.log(error);
            return false;
        }

        return true;
    }

}

export default new Calendar();
