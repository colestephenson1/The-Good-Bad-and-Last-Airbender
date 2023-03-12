describe('movie', () => {
    beforeEach(() => {
        cy.visit('https://the-good-bad-and-last-airbender.vercel.app/')
        cy.intercept('GET', "https://gbla-api.vercel.app/findmovie/wBDLRvjHVOY", {fixture: 'singlemovie'})
    })

    it('should be be able to find and click a movie from the homepage', () => {
        cy.get('[class*=tertiary_intro_movie_poster]')
        .first()
        .click()
        cy.get('[class*=tertiary_intro_movie_poster]')
        .should('be.visible')
        cy.get('[class*=trailer_title]')
        .should('be.visible')
        cy.get('[class*=movie_trailer]')
        .should('be.visible')
        .should('have.attr', 'src')
    })
})