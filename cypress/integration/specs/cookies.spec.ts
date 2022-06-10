/// <reference types="cypress" />

import expectedData from "../../fixtures/expectedData.json";
import { NavigationToURL } from '../../pages/navigateToURL';
import { Cookies } from '../../pages/cookies';
import {PrivacyPolicyPage} from '../../pages/privacyPolicy.page'
import { HomePage } from '../../pages/home.page';

const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const privacyPolicyPage = new PrivacyPolicyPage();
const homePage = new HomePage();

describe('Tests for Cookies Alert Popup', () => {
    beforeEach(() => {
        navigationToURL.navigateToURL('/');
    });

    it('should read Cookies Privacy Policy and accept',() => {
        cookies.readCookiesPrivacyPolicy();
        cy.get(privacyPolicyPage.privacyPolicyTitle).invoke('text').then((text) => {
            expect(text).equal(expectedData.PrivacyPolicyPageTitle)
        });
        privacyPolicyPage.clickGoBack();
        cookies.acceptCookies();
        cy.get(homePage.homePageTitle).invoke('text').then((text) => {
            expect(text).equal(expectedData.homePageTitle)
        });
        cy.title().should('eq', expectedData.homePageTabTitle);
        cy.url().should('eq', expectedData.homePageURL);
    });
});
