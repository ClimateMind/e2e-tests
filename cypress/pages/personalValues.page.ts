import { QuestionnairePage } from "./questionnaire.page";
import { SetLocationPage } from "./setLocation.page";

export class PersonalValuesPage{
    alertLocator = 'div > div.MuiAlert-message';
    YesIamReadyButton = '.MuiGrid-container.MuiGrid-item > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label';
    retakeQuizLocator = 'div > div > main > div:nth-child(3) > div > div > button > span.MuiButton-label';

    diveIntoClimateMind(){
        cy.get(this.YesIamReadyButton).click();
        return new SetLocationPage();
    }
    retakeQuiz(){
        cy.get(this.retakeQuizLocator).click();
        return new QuestionnairePage();
    }
}