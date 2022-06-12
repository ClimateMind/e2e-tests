import { Cookies } from "./cookies";

export class PrivacyPolicyPage{
    privacyPolicyTitle = '.MuiBox-root > .MuiTypography-root';
    goBackButton = '.MuiButton-label';
    

    clickGoBack(){
        cy.get(this.goBackButton).click();
        return new Cookies();
    }
}
