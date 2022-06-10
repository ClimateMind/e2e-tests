import { Cookies } from "./cookies";

export class PrivacyPolicyPage{
    privacyPolicyTitle = '.MuiBox-root > .MuiTypography-root';
    goBackButton = '.MuiButton-label';
    backButton = '.jss58 > :nth-child(2)';

    clickGoBack(){
        cy.get(this.goBackButton).click();
        return new Cookies();
    }

    clickBack(){
        cy.get(this.backButton).click();
        return new Cookies();
    }
}
