import { Cookies } from "./cookies";

export class NavigationToURL{
    navigateToURL(){
        cy.visit('/');
        return new Cookies();
    }
}