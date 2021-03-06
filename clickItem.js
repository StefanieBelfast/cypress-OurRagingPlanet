describe('process buttons and other click options', function () {
    beforeEach(function () {
        cy.visit('https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66')
            .wait(500)
    })

    it('click on button PLAY', () => {
        cy.get('[name="play"]').click()
        //no results
    })

    it('process button NO NEWS', () => {
        cy.get('#clickNewsFeed').click()
        //.contains('<h1>Headline</h1>')
        cy.get('.feed-icon')
        cy.get('#newsFeedBanner').contains('NewsFeed')
        cy.get('#next').contains('Next')
    })

    it('process Feedbackbutton', () => {
        cy.get('[src="https://mo.ev.openindustry.in/fat-orp-deploy/cdn/dist-b035268c81ada6e61b23098d733948f2594491ef/images/assist-round.png"]').click()
        //.contains('<h1>Assistance</h1>')

    })
    it('process Helpbutton', () => {
        cy.get('[src="https://mo.ev.openindustry.in/fat-orp-deploy/cdn/dist-b035268c81ada6e61b23098d733948f2594491ef/images/help-round.png"]')
    })

    it('process button(mapDialog) right top', () => {

        cy.get('.mapdialog-wrapper').click()
        cy.contains('Choose Layers')
        //cy.get('[id="layer-box-school-locations"]')
        cy.get('.layer-box-wrapper')
        //cy.get('[for="layer-box-school-locations"]').click()
        //cy.get('[title="Sports Facility"]').click()
    })


    it('process button "Dashboard"', () => {
        cy.get('[href="/panel"]').contains('Dashboard')//.click()
        //cy.url().should('include', '/panel')
        //  stack, because of a new Page"Login"
    })


}) 