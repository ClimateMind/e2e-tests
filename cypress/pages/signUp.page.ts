import { ClimateFeedPage } from "./climateFeed.page";

export class SignUpPage{
    signUpPageHeaderLocator = '.MuiGrid-root > .MuiBox-root > .MuiTypography-root';
    firstNameLocator = '#firstname';
    lastNameLocator = '#lastname';
    emailLocator = '#email';
    passwordLocator = '#password';
    confirmPasswordLocator = '#confirmPassword';
    createAccountAndGoToFeed_ButtonLocator = '[type="submit"]';
    confirmPasswordHelperTextLocator = '#confirmPassword-helper-text'
    emailHelperTextLocator = '#email-helper-text';
    passwordHelperTextLocator = '#password-helper-text';
    skipMakingAnAccountLocator = 'Skip making an account and see feed';

    enterFirstName(firstName: string){
        cy.get(this.firstNameLocator).type(firstName);
    }
    
    enterLastName(lastName: string){
        cy.get(this.lastNameLocator).type(lastName);
    }

    enterEmail(email: string){
        cy.get(this.emailLocator).type(email);
    }

    enterPassword(password: string){
        cy.get(this.passwordLocator).type(password);
    }

    enterPasswordForconfirmation(confirmPassword: string){
        cy.get(this.confirmPasswordLocator).type(confirmPassword);
    }

    fillSignUpForm(firstName: string, lastName: string, email: string, 
        password: string, confirmPassword: string){
            this.enterFirstName(firstName);
            this.enterLastName(lastName);
            this.enterEmail(email);
            this.enterPassword(password);
            this.enterPasswordForconfirmation(confirmPassword);
    }

    click_CreateAccountAndGoToFeed_Button(){
        cy.get(this.createAccountAndGoToFeed_ButtonLocator).click({force: true});
        return new ClimateFeedPage();
    }

    click_skipMakingAnAccount_Button(){
        cy.contains(this.skipMakingAnAccountLocator).click();
        return new ClimateFeedPage();
    }
}
