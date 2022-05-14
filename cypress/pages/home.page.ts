export class HomePage{
    getStartedButton = '.jss26 > .MuiButtonBase-root > .MuiButton-label';
    homePageTitle = '.jss79 > .MuiTypography-root';

    homePage(){
        cy.get(this.getStartedButton).should('be.visible');
    }
}
