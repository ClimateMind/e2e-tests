import expectedData from "../fixtures/expectedData.json";
import { SubmitPage } from "./submit.page";
import { SubmitSetTwoPage } from "./submitSetTwo.page";

export class QuestionnairePage{
    questionsAnswers = '[role="radiogroup"]';
    questionsContainer = '[id="questionContainer"]';
    questionNumber = '[data-testid="questionNumber"]'
    sameAnswerOption = `.MuiFormGroup-root > :nth-child(${Math.floor(Math.random() * 6) + 1}) > .MuiTypography-root`;

    QuestionnairePage(){
        cy.url().should('eq', expectedData.questionnairePageURL);
    }
    answerQuestions(){
        for (let i = 1; i < 11; i++) {
            cy.get(`.MuiFormGroup-root > :nth-child(${Math.floor(Math.random() * 6) + 1}) > .MuiTypography-root`)
            .should('be.visible')
            .click();
           cy.wait(2000);
        }
        return new SubmitPage();
    }
    provideSameAnswerOptionToAllQuestions(){
        for (let i = 1; i < 11; i++) {
            cy.get(this.sameAnswerOption)
            .should('be.visible')
            .click();
           cy.wait(2000);
        }
        return new SubmitPage();
    }

    finishAll20Questions(){
        for (let i = 1; i < 11; i++) {
            cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiTypography-root')
            .should('be.visible')
            .click();
           cy.wait(2000);
        }
        return new SubmitPage();
    }

    answer20Questions(){
        for (let i = 1; i < 11; i++) {
            cy.get(`.MuiFormGroup-root > :nth-child(${Math.floor(Math.random() * 6) + 1}) > .MuiTypography-root`)
            .should('be.visible')
            .click();
           cy.wait(2000);
        }
        return new SubmitSetTwoPage();
    }
    
}