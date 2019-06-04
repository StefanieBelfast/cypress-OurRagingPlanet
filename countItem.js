describe('count items', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })

    it('count items', () => {
      cy.get('.vis-text').should('have.length', 12)
         })
        it('count items', () => {
      cy.get('.vis-minor').should('have.length', 19)
             })
            it('count items', () => {
      cy.get('.vis-even').should('have.length', 11)
                 })
                it('count items', () => {
      cy.get('.vis-odd').should('have.length', 8)
                     })
                    it('count items', () => {
      cy.get('.menu').should('have.length',1)
                       })  
                        it('count items', () => {
      cy.get('.vis-panel').should('have.length',8)
                      })       
                            it('count items', () => {
      cy.get('.vis-major').should('have.length',2)
                    })             
                                it('count items', () => {
      cy.get('.leaflet-pane').should('have.length',7)
              })                       
                                    it('count items', () => {
      cy.get('.leaflet-marker-pane').should('have.length',1)
      //cy.get('.leaflet-interactive')
  })

    it('check items', () => {
        //cy.get('.vis-custom-time')
        cy.get('.panel-page__icon-symbol')
         })
        it('count items', () => {
        cy.get('.panel-page__phenomenon-header').contains('Hurricane Storm Surge')
             })
            it('count items', () => {
        cy.get('.panel-page__caption-header').contains('Notes')
                 })
                it('count items', () => {
        cy.get('[name="play"]').contains('PLAY')//.click()
                     })
                    it('count items', () => {
        cy.get('.panel-page__time-header-block').contains('Current Time')//.click()
                       })  
                        it('count items', () => {
        //cy.get('.mapdialog-wrapper').contains([id="dialogMenu"])
        ///it stacks because teh webpage is not running 
        cy.get('#clickNewsFeed').contains('NO NEWS')
                   })          
                            it('count items', () => {
        cy.get('.vis-foreground')
                })                 
                                it('count items', () => {
        cy.get('.btn').contains('HOURS')
              })                       
                                    it('count items', () => {
        cy.get('.btn').contains('DAYS')
           })                               
                                        it('count items', () => {
        cy.get('#clicktaskwork').contains('NO TASKS')

    })

    
    
  
})
