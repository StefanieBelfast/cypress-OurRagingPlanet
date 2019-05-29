describe('map', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })

    it('countItem', () => {
        cy.get('.leaflet-marker-icon')
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
