describe('count items', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })

    it('count items', () => {
      cy.get('.vis-text').should('have.length', 12)
      cy.get('.vis-minor').should('have.length', 19)
      cy.get('.vis-even').should('have.length', 11)
      cy.get('.vis-odd').should('have.length', 8)
      cy.get('.menu').should('have.length',1)
      cy.get('.vis-panel').should('have.length',8)
      cy.get('.vis-major').should('have.length',2)
      cy.get('.leaflet-pane').should('have.length',7)
      cy.get('.leaflet-marker-pane').should('have.length',1)
      //cy.get('.leaflet-interactive')
  })

    it('check items', () => {
        //cy.get('.vis-custom-time')
        cy.get('.panel-page__icon-symbol')
        cy.get('.panel-page__phenomenon-header').contains('Hurricane Storm Surge')
        cy.get('.panel-page__caption-header').contains('Notes')
        cy.get('[name="play"]').contains('PLAY')//.click()
        cy.get('.panel-page__time-header-block').contains('Current Time')//.click()
        //cy.get('.mapdialog-wrapper').contains([id="dialogMenu"])
        ///it stacks because teh webpage is not running 
        cy.get('#clickNewsFeed').contains('NO NEWS')
        cy.get('.vis-foreground')
        cy.get('.btn').contains('HOURS')
        cy.get('.btn').contains('DAYS')
        cy.get('#clicktaskwork').contains('NO TASKS')

    })

    
    
  
})