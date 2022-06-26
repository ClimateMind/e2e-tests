import { SignUpPage } from "./signUp.page";

export class SetLocationPage{
    zipCodeInputFieldLocator = '#zipCodeInput';
    submitButtonLocator = '#submitButton';
    dontUseZipCodeLocator = 'p > button > span.MuiButton-label';
    invalidZipCodeMessageLocator = '#zipCodeInput-helper-text';

    enterZipCode(zipcode){
        cy.get(this.zipCodeInputFieldLocator).type(zipcode);
    }
    submitZipCode(){
        cy.get(this.submitButtonLocator).click();
        return new SignUpPage();
    }

    skippUsingZipCode(){
        cy.get(this.dontUseZipCodeLocator).click();
        return new SignUpPage();
    }
    
}