/// <reference types="cypress" />

import expectedData from "../../fixtures/expectedData.json";
import { NavigationToURL } from '../../pages/navigateToURL';
import { Cookies } from '../../pages/cookies';
import { HomePage } from '../../pages/home.page';
const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const homePage = new HomePage();

describe('Climate Mind app Navigation', () => {
    it('should navigate to Climate Mind app',() => {
        navigationToURL.navigateToURL('/');
        cookies.acceptCookies();
        homePage.homePage();
        cy.title().should('eq', expectedData.homePageTabTitle);
        cy.url().should('eq', expectedData.homePageURL);
    });
});
