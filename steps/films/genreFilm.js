import DefaultSteps from '../default';
import page from '../../pages/films/genreFilm';

const assert = require('assert').strict;


class GenreFilmSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForList() {
		this.page.waitForContainer();
	}

	openFilm () {
		this.page.clickFilm();
		this.page.checkFilmContent();
    }
    
    createReview(title, body) {
        this.page.setReviewTitle(title);
        this.page.setReviewBody(body);
        this.page.submitRewiew();
    }

    checkreview(title, body) {
        assert(this.page.getFirstReviewTitle(), title);
        assert(this.page.getFirstReviewBody(), body);
    }

    openCreateWindow(){
        this.page.clickSelect();
        this.page.chooseNewListOption();
    }

    createList(name) {
        this.openCreateWindow();
        this.page.setListName(name);
        this.page.sumbitCreate();
    }

    checkListName(name) {
        assert(this.page.getCurrentList(), name)
    }

    openFilmPage(){
        this.open('https://cinsear.ru/search?films');
		this.waitForList();
        this.openFilm();
    }
}

export default new GenreFilmSteps();