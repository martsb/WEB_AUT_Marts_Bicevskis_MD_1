describe('Testing highlighting', () => {
    context("Validating", () => {
        it('selecting right boxes and highlighting them', () => {
            //a
            cy.visit('https://demoqa.com/selectable');
            //b
            cy.get('.nav-item').contains('Grid').click();
            //c
            cy.get('.list-group-item').contains('Two').click();
            cy.get('.list-group-item').contains('Four').click();
            cy.get('.list-group-item').contains('Six').click();
            cy.get('.list-group-item').contains('Eight').click();
            //d
            cy.get('.list-group-item').contains('Two').should('have.class', 'active');
            cy.get('.list-group-item').contains('Four').should('have.class', 'active');
            cy.get('.list-group-item').contains('Six').should('have.class', 'active');
            cy.get('.list-group-item').contains('Eight').should('have.class', 'active');
            //e
            cy.get('.list-group-item').contains('One').should('not.have.class', 'active');
            cy.get('.list-group-item').contains('Three').should('not.have.class', 'active');
            cy.get('.list-group-item').contains('Five').should('not.have.class', 'active');
            cy.get('.list-group-item').contains('Seven').should('not.have.class', 'active');
            cy.get('.list-group-item').contains('Nine').should('not.have.class', 'active');
        })
    })
});