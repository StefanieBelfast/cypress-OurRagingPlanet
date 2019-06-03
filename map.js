describe('map', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })

    it('Item', () => {
        cy.get('.leaflet-pane')
        .click(949,382)
        .click(941,390)
        .click(961,402)
        
        .click(402,402)
cy.get('.leaflet-popup').contains('Mid and')
    })

    it('countItem', () => {
        cy.get('[title="Glenlough Community Centre"]')
        cy.get('.leaflet-popover-container')
    })

    it('Zoom in/out', () => {
        cy.get('.leaflet-control-zoom')
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-in').click()
        cy.get('.leaflet-control-zoom-in').click()
        cy.get('.leaflet-control-zoom-in').click()
    })
})
