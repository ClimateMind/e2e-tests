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
import { ClimateFeedPage } from "../../pages/climateFeed.page";

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
const climateFeedPage = new ClimateFeedPage();

let user = {
    "firstName": faker.name.firstName(),
    "lastName": faker.name.lastName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(20)
}


describe('Sign Up Tests', () => {
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

        personalValuesPage.diveIntoClimateMind();
        setLocationPage.enterZipCode(faker.random.numeric(5));
        setLocationPage.submitZipCode();
        cy.get(signUpPage.signUpPageHeaderLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.signUpPageHeader);
        });
    });

    it('should allow user to fill sign up form correctly and sign up',() => {
        signUpPage.fillSignUpForm(user.firstName, user.lastName, user.email, user.password, user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(climateFeedPage.alertLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.alertMessageOnClimateFeedPage);
        });
        cy.get(climateFeedPage.titleLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.climateFeedPageTitle);
        });
    });

    it('should not allow user to sign up without providing first name',() => {
        signUpPage.enterLastName(user.lastName);
        signUpPage.enterEmail(user.email);
        signUpPage.enterPassword(user.password);
        signUpPage.enterPasswordForconfirmation(user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should not allow user to sign up without providing last name',() => {
        signUpPage.enterFirstName(user.firstName);
        signUpPage.enterEmail(user.email);
        signUpPage.enterPassword(user.password);
        signUpPage.enterPasswordForconfirmation(user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should not allow user to sign up without providing email',() => {
        signUpPage.enterFirstName(user.firstName);
        signUpPage.enterLastName(user.lastName);
        signUpPage.enterPassword(user.password);
        signUpPage.enterPasswordForconfirmation(user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should not allow user to sign up without providing password',() => {
        signUpPage.enterFirstName(user.firstName);
        signUpPage.enterLastName(user.lastName);
        signUpPage.enterEmail(user.email);
        signUpPage.enterPasswordForconfirmation(user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should not allow user to sign up without providing password for confirmation',() => {
        signUpPage.enterFirstName(user.firstName);
        signUpPage.enterLastName(user.lastName);
        signUpPage.enterEmail(user.email);
        signUpPage.enterPassword(user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should not allow user to sign up when there is a mismatch between password and confirm password',() => {
        let confirmPassword = faker.internet.password(20);
        signUpPage.fillSignUpForm(user.firstName, user.lastName, user.email, user.password, confirmPassword);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.confirmPasswordHelperTextLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.confirmPasswordHelperText);
        });
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });
    
    it('should handle incorrect email format',() => {
        let incorrectEmailFormat = faker.name.findName();
        signUpPage.fillSignUpForm(user.firstName, user.lastName, incorrectEmailFormat, user.password, user.password);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.emailHelperTextLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.emailHelperText);
        });
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should handle incorrect password format',() => {
        let incorrectPasswordFormat = faker.word.noun();
        signUpPage.fillSignUpForm(user.firstName, user.lastName, user.email, incorrectPasswordFormat, incorrectPasswordFormat);
        signUpPage.click_CreateAccountAndGoToFeed_Button();
        cy.get(signUpPage.passwordHelperTextLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.passwordHelperText);
        });
        cy.get(signUpPage.createAccountAndGoToFeed_ButtonLocator).should('be.disabled');
    });

    it('should allow user to skip creating an account and see the feed',() => {
        signUpPage.click_skipMakingAnAccount_Button();
        cy.url().should('eq', expectedData.climateFeedPageURL);
        cy.get(climateFeedPage.titleLocator,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.climateFeedPageTitle);
        });
    });
});
