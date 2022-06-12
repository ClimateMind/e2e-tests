import { StartPage } from "./start.page";

export class HomePage{
    getStartedButton = '.jss26 > .MuiButtonBase-root > .MuiButton-label';
    homePageTitle = 'h1:contains("Personalize")';

    homePage(){
        cy.get(this.getStartedButton).should('be.visible');
    }
    clickGetStarted(){
        cy.get(this.getStartedButton).click();
        return new StartPage();
    }
}
