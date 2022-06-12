/// <reference types="cypress" />

import expectedData from "../../fixtures/expectedData.json";
import { NavigationToURL } from '../../pages/navigateToURL';
import { Cookies } from '../../pages/cookies';
import { HomePage } from '../../pages/home.page';
import { StartPage } from '../../pages/start.page';
import { QuestionnairePage } from '../../pages/questionnaire.page';
import { SubmitPage } from '../../pages/submit.page';
import { SubmitSetTwoPage } from '../../pages/submitSetTwo.page';

const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const homePage = new HomePage();
const startPage = new StartPage();
const questionnairePage = new QuestionnairePage();
const submitPage = new SubmitPage();
const submitSetTwoPage = new SubmitSetTwoPage();

describe('Questionnaire Tests', () => {
    beforeEach(() => {
        navigationToURL.navigateToURL('/');
        cookies.acceptCookies();
        homePage.homePage();
        cy.title().should('eq', expectedData.homePageTabTitle);
        cy.url().should('eq', expectedData.homePageURL);
    });

    it('should allow user to complete answering 10 questions of quiz. ',() => {
        homePage.clickGetStarted();
        startPage.clickTakeTheQuizButton();
        questionnairePage.answerQuestions();

        cy.url().should('eq', expectedData.submitPageURL);
        cy.get(submitPage.submitPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitPageTitle);
        });
    });

    it('should allow user to complete answering 20 questions of quiz. ',() => {
        homePage.clickGetStarted();
        startPage.clickTakeTheQuizButton();
        questionnairePage.answerQuestions();
        submitPage.finishTheQuiz();
        questionnairePage.answer20Questions();
        submitSetTwoPage.SubmitSetTwoPage();
        cy.url().should('eq', expectedData.submitSetTwoPageURL);
        cy.get(submitSetTwoPage.submitSetTwoPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitSetTwoPageTitle);
        });
    });
});
