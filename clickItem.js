describe('check/count items', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })
    it('Dashboard', () => {
        cy.get('[href="/panel"]').contains('Dashboard').click()
        cy.url().should('include', '/panel')
    //    cy.get('.vis-minor').should('have.length', 19)
    //   cy.get('.vis-even').should('have.length', 11)
    //    cy.get('.vis-odd').should('have.length', 8)
    //    cy.get('.menu').should('have.length',1)
    //    cy.get('.vis-panel').should('have.length',8)
    //    cy.get('.vis-major').should('have.length',2)
    })


})   