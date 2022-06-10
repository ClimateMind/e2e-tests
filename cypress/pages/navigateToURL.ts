import { Cookies } from "./cookies";

export class NavigationToURL{
    navigateToURL(endpoint:string){
        cy.visit(endpoint);
        return new Cookies();
    }
}
