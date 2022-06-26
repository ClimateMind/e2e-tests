/// <reference types="cypress" />

import expectedData from "../../fixtures/expectedData.json";
import { NavigationToURL } from '../../pages/navigateToURL';
import { Cookies } from '../../pages/cookies';
import { HomePage } from '../../pages/home.page';
import { StartPage } from '../../pages/start.page';
import { QuestionnairePage } from '../../pages/questionnaire.page';
import { SubmitPage } from '../../pages/submit.page';
import { SubmitSetTwoPage } from '../../pages/submitSetTwo.page';
import {PersonalValuesPage} from '../../pages/personalValues.page'

const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const homePage = new HomePage();
const startPage = new StartPage();
const questionnairePage = new QuestionnairePage();
const submitPage = new SubmitPage();
const submitSetTwoPage = new SubmitSetTwoPage();
const personalValuesPage = new PersonalValuesPage();

describe('Personal Values Tests', () => {
    beforeEach(() => {
        navigationToURL.navigateToURL('/');
        cookies.acceptCookies();
        homePage.homePage();
        cy.title().should('eq', expectedData.homePageTabTitle);
        cy.url().should('eq', expectedData.homePageURL);

        //Take quiz
        homePage.clickGetStarted();
        startPage.clickTakeTheQuizButton();
        questionnairePage.answerQuestions();
        cy.url().should('eq', expectedData.submitPageURL);
        cy.get(submitPage.submitPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitPageTitle);
        });
    });

    it('should allow user to submit answers for 10 questions and automatically be redirected to Personal Values page. ',() => {
        submitPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
    });

    it('should allow user to retake the quiz after submitting answers for 10 questions.',() => {
        submitPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
        personalValuesPage.retakeQuiz();
        questionnairePage.answerQuestions();
        submitPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
    });

    it('should allow user to submit answers for 20 questions and automatically be redirected to Personal Values page. ',() => {
        submitPage.finishTheQuiz();
        questionnairePage.answer20Questions();
        submitSetTwoPage.SubmitSetTwoPage();
        cy.url().should('eq', expectedData.submitSetTwoPageURL);
        cy.get(submitSetTwoPage.submitSetTwoPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitSetTwoPageTitle);
        });
        submitSetTwoPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
    });
    
    it('should allow user to retake the quiz after submitting answers for 20 questions.',() => {
        submitPage.finishTheQuiz();
        questionnairePage.answer20Questions();
        submitSetTwoPage.SubmitSetTwoPage();
        cy.url().should('eq', expectedData.submitSetTwoPageURL);
        cy.get(submitSetTwoPage.submitSetTwoPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitSetTwoPageTitle);
        });
        submitSetTwoPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
        personalValuesPage.retakeQuiz();
        questionnairePage.answerQuestions();
        cy.url().should('eq', expectedData.submitPageURL);
        cy.get(submitPage.submitPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitPageTitle);
        });
        submitPage.finishTheQuiz();
        questionnairePage.answer20Questions();
        submitSetTwoPage.SubmitSetTwoPage();
        cy.url().should('eq', expectedData.submitSetTwoPageURL);
        cy.get(submitSetTwoPage.submitSetTwoPageTitle,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.submitSetTwoPageTitle);
        });
        submitSetTwoPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
    });
});
