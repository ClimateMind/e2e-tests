import { PersonalValuesPage } from "./personalValues.page";
import { QuestionnairePage } from "./questionnaire.page";

export class SubmitPage{
    submitPageTitle = 'h1.MuiTypography-root'
    findOutMyClimatePersonalityButton = '[data-testid="continue-quiz-button"] > .MuiButton-label';
    finishTheQuizButton = '[data-testid="finish-quiz-button"]'
   
    findMyClimatePersonality(){
        cy.get(this.findOutMyClimatePersonalityButton).click();
        return new PersonalValuesPage();
    }
    finishTheQuiz(){
        cy.get(this.finishTheQuizButton).click();
        return new QuestionnairePage();
    }
}