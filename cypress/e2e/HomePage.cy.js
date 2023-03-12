describe('homepage', () => {

  beforeEach(() => {
    cy.visit('https://the-good-bad-and-last-airbender.vercel.app/')
  })

  it('should able to navigate to the homepage of the application', () => {
    cy.url().should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/')
  })

  it('should display the nav bar with a title and 9 nav options', () => {
    cy.get('[class*=navbar]').should('be.visible')
    cy.get('h1').contains('The Good, The Bad, and The Last Airbender').should('be.visible')
    cy.get('[class*=navbar_option]').should('be.visible')
    cy.get('[class*=navbar_option]').should('have.length', 9)
    cy.get('[class*=navbar_option]').first().contains('Action')
    .next().contains('Comedy')
  })

  it('should able to see see a portrait', () => {
    cy.get('[class*=handsome_mf]').should('be.visible')
    .should('have.attr', 'src').should('include', "https://avatars.githubusercontent.com/u/102827145?v=4")
  })

  it('should able to click on the intro text and navigate to second section of the homepage and see the Pulp Fiction poster', () => {
    cy.get('[class*=intro_scroll_link]').should('be.visible').click()
    .url().should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/#secondary_section')
    cy.get('[class*=movie_poster]').should('be.visible')
    .should('have.attr', 'src').should('include', "https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg")
  })

  it('should able to click a secondary link to head to the bottom of the homepage and see 3 posters and a link to the top', () => {
    cy.get('[class*=secondary_link]').click()
    .url().should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/#tertiary_section')
  })

})