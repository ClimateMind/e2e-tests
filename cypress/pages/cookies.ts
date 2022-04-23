import { HomePage } from "./home.page";

export class Cookies{
    acceptButton = '.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label';
    cookiePopup = '#alert-accept-privacy-policy > .MuiTypography-root';
    acceptCookies(){
        cy.get(this.cookiePopup).should('be.visible');
        cy.get(this.acceptButton).click();
        return new HomePage();
    }
}