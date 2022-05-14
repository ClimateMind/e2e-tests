import { HomePage } from "./home.page";
import { PrivacyPolicyPage } from "./privacyPolicy.page";

export class Cookies{
    acceptButton = '.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label';
    cookiePopup = '#alert-accept-privacy-policy > .MuiTypography-root';

    readCookiesPrivacyPolicy(){
        cy.get(this.cookiePopup).should('be.visible');
        cy.get('#alert-accept-privacy-description > .MuiTypography-root')
        .should('be.visible')
        .click();
        return new PrivacyPolicyPage();
    }

    acceptCookies(){
        cy.get(this.cookiePopup).should('be.visible');
        cy.get(this.acceptButton).click();
        return new HomePage();
    }
}