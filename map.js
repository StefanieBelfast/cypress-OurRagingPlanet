describe('map', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
        .wait(500)
    })

    it('Item', () => {
        cy.get('.leaflet-map')
        .click(775,290)
        .contains('Bus Stop')
    })
    it('Item', () => {
        cy.get('.leaflet-map')
        .click({x:961,y:402, force: true})
        .contains('Bus Stop')
    })

    

    it('countItem', () => {
        cy.get('[title="Glenlough Community Centre"]')
        cy.get('.leaflet-popover-container')
    })

    it('process zooming in/out', () => {
        cy.get('.leaflet-control-zoom')
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-out').click()
        cy.get('.leaflet-control-zoom-in').click()
        cy.get('.leaflet-control-zoom-in').click()
        cy.get('.leaflet-control-zoom-in').click()
    })
})
