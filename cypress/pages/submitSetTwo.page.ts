import { PersonalValuesPage } from "./personalValues.page";

export class SubmitSetTwoPage{
    submitSetTwoPageTitle = 'h1.MuiTypography-root';
    findOutMyClimatePersonalityButton = '#submitButton > span.MuiButton-label';

    SubmitSetTwoPage(){
        cy.get(this.submitSetTwoPageTitle).should('be.visible');
    }
    findMyClimatePersonality(){
        cy.get(this.findOutMyClimatePersonalityButton).click();
        return new PersonalValuesPage();
    }
}
