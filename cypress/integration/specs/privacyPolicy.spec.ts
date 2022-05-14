/// <reference types="cypress" />

import expectedData from "../../fixtures/expectedData.json";
import { NavigationToURL } from '../../pages/navigateToURL';
import { Cookies } from '../../pages/cookies';
import {PrivacyPolicyPage} from '../../pages/privacyPolicy.page'

const navigationToURL = new NavigationToURL();
const cookies = new Cookies();
const privacyPolicyPage = new PrivacyPolicyPage();

describe('Tests for Privacy Policy Page', () => {
    beforeEach(() => {
        navigationToURL.navigateToURL('/');
    });

    it('should allow user to use Back button',() => {
        cookies.readCookiesPrivacyPolicy();
        privacyPolicyPage.clickBack();
        cy.get(cookies.cookiePopup,{ timeout: 10000 }).invoke('text').then((text) => {
            expect(text).equal(expectedData.cookiePopUpAlertTitle);
        });
    });
});
