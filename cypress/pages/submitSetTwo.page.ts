
export class SubmitSetTwoPage{
    submitSetTwoPageTitle = 'h1.MuiTypography-root';

    SubmitSetTwoPage(){
        cy.get(this.submitSetTwoPageTitle).should('be.visible');
    }
}
