export class HomePage{
    getStartedButton = '.jss26 > .MuiButtonBase-root > .MuiButton-label';
    
    homePage(){
        cy.get(this.getStartedButton).should('be.visible');
    }
}