describe('Quiz Component', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the base URL of your application
    });

    it('should start the quiz and display the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });

    it ('should answer questions and display quiz completed', () => {
        cy.get('button').contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click();
        }
        cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });

    it('should restart the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});
