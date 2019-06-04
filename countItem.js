describe('count items', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
            .wait(500)
    })

    it('count area with time/date in the bottom', () => {
        cy.get('.vis-text').should('have.length', 12)
    })

    it('count area with time/date in the bottom which is a even number', () => {
        cy.get('.vis-even').should('have.length', 11)
    })
    it('count area with time/date in the bottom which is a odd number', () => {
        cy.get('.vis-odd').should('have.length', 8)
    })
    it('count area menu with test HOURS/DAYS bottom', () => {
        cy.get('.menu').should('have.length', 1).contains('HOURS')
    })
    
    it('count area with Date bottom', () => {
        cy.get('.vis-major').should('have.length', 2)
    })
   
    it('count leaflet marker', () => {
        cy.get('.leaflet-marker-pane').should('have.length', 1)
        //cy.get('.leaflet-interactive')
    })

    it('get the icons(Feedback&Help) right top', () => {
        //cy.get('.vis-custom-time')
        cy.get('.panel-page__icon-symbol')
    })
    it('exist the headline with text"Hurricane Storm Surge"', () => {
        cy.get('.panel-page__phenomenon-header').contains('Hurricane Storm Surge')
    })
    it('exist the second headline with text"Notes"', () => {
        cy.get('.panel-page__caption-header').contains('Notes')
    })
    it('get the button PLAY with text "play"', () => {
        cy.get('[name="play"]').contains('PLAY')//.click()
        //no response when clicking
    })
    it('exist a panel middle/top with text "Current Time"', () => {
        cy.get('.panel-page__time-header-block').contains('Current Time')//.click()
    })
    it('exist button NEWS with text "NO NEWS"', () => {
        //cy.get('.mapdialog-wrapper').contains([id="dialogMenu"])
        ///it stacks because teh webpage is not running 
        cy.get('#clickNewsFeed').contains('NO NEWS')
    })
    it('exist area between "NO NEWS" and "NO TASKS"', () => {
        cy.get('.vis-foreground')
    })
    it('exist an area with text "HOURS"', () => {
        cy.get('.btn').contains('HOURS')
    })
    it('exist an area with text "DAYS"', () => {
        cy.get('.btn').contains('DAYS')
    })
    it('exist a button "NO TASKS"', () => {
        cy.get('#clicktaskwork').contains('NO TASKS').click()
        //no response with a click
    })




})