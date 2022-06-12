import expectedData from "../fixtures/expectedData.json";
import { QuestionnairePage } from "./questionnaire.page";

export class StartPage{
    takeTheQuizButton = '.MuiButton-label';

    startPage(){
        cy.get(this.takeTheQuizButton).should('be.visible');
        cy.url().should('eq', expectedData.startPageURL);
    }
    clickTakeTheQuizButton(){
        cy.get(this.takeTheQuizButton).click();
        return new QuestionnairePage();
    }
    
}