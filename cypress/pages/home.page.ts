export class HomePage{
    getStartedButton = '.jss26 > .MuiButtonBase-root > .MuiButton-label';
    homePageTitle = 'h1:contains("Personalize")';

    homePage(){
        cy.get(this.getStartedButton).should('be.visible');
    }
}
