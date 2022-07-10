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
import {SetLocationPage} from '../../pages/setLocation.page'
import {SignUpPage} from '../../pages/signUp.page'
import { faker } from '@faker-js/faker';

const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const homePage = new HomePage();
const startPage = new StartPage();
const questionnairePage = new QuestionnairePage();
const submitPage = new SubmitPage();
const submitSetTwoPage = new SubmitSetTwoPage();
const personalValuesPage = new PersonalValuesPage();
const setLocationPage = new SetLocationPage();
const signUpPage = new SignUpPage();

describe('Set Location Tests', () => {
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

        submitPage.findMyClimatePersonality();
        cy.get(personalValuesPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertOnPersonalValuePage);
        });
    });

    it('should allow user to submit correct zip code',() => {
        personalValuesPage.diveIntoClimateMind();
        setLocationPage.enterZipCode(faker.random.numeric(5));
        setLocationPage.submitZipCode();
        cy.get(signUpPage.signUpPageHeaderLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.signUpPageHeader);
        });
    });
    
    it('should handle submitting invalid zip code',() => {
        personalValuesPage.diveIntoClimateMind();
        setLocationPage.enterZipCode((faker.random.alpha(5)).toUpperCase());
        cy.get(setLocationPage.invalidZipCodeMessageLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.invalidZipCodeMessage);
        });
    });
});
