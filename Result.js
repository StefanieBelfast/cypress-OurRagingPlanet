describe('EndResult of the Searching', () => {
    beforeEach(function () {
        cy.visit('https://dev.thedatatimes.com/')
        cy.get('[type="text"]').type('Household')
        cy.get('.tags-input-typeahead-item-highlighted-default').click()
        cy.get('.searchButtonLabel').click({ force: true })
            .wait(4000)
        cy.get('.card-body').contains('Explore Data').click()
    })
    it('exist button ViewOriginal(viewDataButton) and if it works', () => {
        cy.get('.col-4').contains('View Original')//.click()
        // the test is not working because"Cypress does not allow you to change superdomains within a single test."  
    })
    it('exist button Back to Search Results(viewDataButton) and if it works', () => {
        cy.get('.viewDataButton').contains('Back to Search Results').click()
        cy.get('.datasetInfo').should('have.length', 1).contains('Search for topics in over 32 Data Sets')
    })
    it('exits a Text"eligible-but-not-homeless"', () => {
        cy.get('.title').contains('eligible-but-not-homeless')
    })
    it('exits a Text"Organization"', () => {
        cy.get('.title').contains('Organization')
    })
    it('exits a Text"Data Sets" ', () => {
        cy.get('.title').contains('Data Sets')
    })
    it('exits a Text"Last updated" and "3rd December 2010"', () => {
        cy.get('.col-4').contains('Last updated')
        cy.get('.col-4').contains('3rd December 2010')
    })
    it('exits button(communities) and if it works', () => {
        cy.get('.badge').contains('Communities').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exits button(Household) and if it works', () => {
        cy.get('.badge').contains('Household').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exist a logo(sourceLogo)', () => {
        cy.get('.sourceLogo').should('have.length', 1)
    })
    it('count boxes right side(squareBox) and if text "Graph', () => {
        cy.get('.squareBox').should('have.length', 3).contains('Graph')
    })
    it('count rows(nav-item) and if text "How it works" exist', () => {
        cy.get('.nav-item').should('have.length', 5).contains('How it works')
    })
    it('get rows(nav-item) and if text "About" exist', () => {
        cy.get('.nav-item').contains('About')
    })
    it('get rows(nav-item) and if text "Support" exist', () => {
        cy.get('.nav-item').contains('Support')
    })
    it('get rows(nav-item) and if text "Contact" exist', () => {
        cy.get('.nav-item').contains('Contact')
    })
    it('get rows(nav-item) and if text "0.12" exist', () => {
        cy.get('.nav-item').contains('0.12')
    })
    it('get rows(nav-item) and if text "Search Data Times" exist', () => {
        cy.get('.searchButtonLabel').contains('Search Data Times')
    })

})