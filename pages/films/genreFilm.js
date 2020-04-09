import DefaultPage from '../default';



class GenreFilmPage extends DefaultPage {
	constructor() {
		super('genreFilm', '.genres')
	}

	get locators () {
		return {
            container: this.container,
            films: '[class=genre-films-bar]',
            film:'[href^="/film?"]',
            filmContent: '.film',
            titleInput: '.js-title-input',
            bodyInput: '.js-text-input',
            submitRewiew: '[id="js-review-button"]',
            reviews: '.feedback',
            select: '.js-select',
            selected: '.js-select [selected="true"]',
            newlist: '[value="new_list"]',
            listNameInput: '#js-list-input',
            listSubmit: '#js-create-list',
            rewiewbody: '.feedback__main div:nth-child(3)',
		}
	}

    clickFilm() {
        this.page.waitForVisible(this.locators.film)
        this.page.click(this.locators.film)
    }

    checkFilmContent() {
        this.page.waitForVisible(this.locators.filmContent)
    }

    setReviewTitle(title) {
        this.page.waitForVisible(this.locators.titleInput)
        this.page.click(this.locators.titleInput)
        this.page.setValue(this.locators.titleInput, title)
    }

    setReviewBody(body) {
        this.page.waitForVisible(this.locators.bodyInput)
        this.page.click(this.locators.bodyInput)
        this.page.setValue(this.locators.bodyInput, body)
    }

    submitRewiew() {
        this.page.waitForVisible(this.locators.submitRewiew);
		this.page.click(this.locators.submitRewiew);
    }

    getFirstReviewTitle() {
        this.page.waitForVisible(this.locators.reviews)
        var rewiews = $(this.locators.reviews);
        return rewiews.getText('.title');
    }

    getFirstReviewBody() {
        return this.page.getText(this.locators.rewiewbody);
    }

    clickSelect() {
        this.page.waitForVisible(this.locators.select);
        this.page.click(this.locators.select);
    }

    chooseNewListOption() {
        this.page.waitForVisible(this.locators.newlist);
        this.page.click(this.locators.newlist);
    }

    setListName(name) {
        this.page.waitForVisible(this.locators.listNameInput);
        this.page.click(this.locators.listNameInput);
        this.page.setValue(this.locators.listNameInput, name)
    }

    sumbitCreate() {
        this.page.waitForVisible(this.locators.listSubmit);
        this.page.click(this.locators.listSubmit)
    }

    getCurrentList() {
        this.page.waitForVisible(this.locators.selected);
        return this.page.getValue(this.locators.selected)
    }
}

export default new GenreFilmPage();
