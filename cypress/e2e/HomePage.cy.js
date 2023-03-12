describe('homepage', () => {

  beforeEach(() => {
    cy.visit('https://the-good-bad-and-last-airbender.vercel.app/')
    cy.get('[class*=header]').should('have.css', 'background-color')
    .should('eq', 'rgb(0, 0, 69)')
    cy.get('[class*=header]').should('have.css', 'font-family')
    .should('eq', '"Times New Roman", serif')
    cy.get('[class*=intro_section]').should('have.css', 'background-color')
    .should('eq', 'rgb(173, 216, 230)')
    cy.get('[class*=intro_section2]').should('have.css', 'background-color')
    .should('eq', 'rgb(47, 61, 83)')
    cy.get('[class*=intro_section3]').should('have.css', 'background-color')
    .should('eq', 'rgb(221, 234, 238)')
    cy.intercept('GET', 'https://gbla-api.vercel.app/movies', {fixture : 'movies'} )
  })

  it('should able to navigate to the homepage of the application', () => {
    cy.url()
    .should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/')
  })

  it('should display the nav bar with a title and 9 nav options', () => {
    cy.get('[class*=navbar]')
    .should('be.visible')
    cy.get('h1')
    .contains('The Good, The Bad, and The Last Airbender').should('be.visible')
    cy.get('[class*=navbar_option]')
    .should('be.visible')
    cy.get('[class*=navbar_option]').
    should('have.length', 9)
    cy.get('[class*=navbar_option]')
    .first()
    .contains('Action')
    .next()
    .contains('Comedy')
  })

  it('should able to see see a portrait and 1 each of GitHub and LinkedIn icons', () => {
    cy.get('[class*=handsome_mf]')
    .should('be.visible')
    .should('have.attr', 'src')
    .should('include', "https://avatars.githubusercontent.com/u/102827145?v=4")
    cy.get('[class*=external_link]')
    .should('be.visible')
    .should('have.length', 2)
  })

  it('should able to click on the intro text and navigate to second section of the homepage and see the Pulp Fiction poster', () => {
    cy.get('[class*=intro_scroll_link]')
    .should('be.visible')
    .click()
    .url()
    .should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/#secondary_section')
    cy.get('[class*=movie_poster]')
    .should('be.visible')
    .should('have.attr', 'src')
    .should('include', "https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg")
  })

  it('should able to click a secondary link to head to the bottom of the homepage and see 3 posters and a link to the top', () => {
    cy.get('[class*=secondary_link]')
    .click()
    .url()
    .should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/#tertiary_section')
    cy.get('[class*=tertiary_intro_movie_poster]')
    .should('be.visible')
    .should('have.length', 3)
    cy.get('[class*=tertiary_link]')
    .should('be.visible')
    .click()
    .url()
    .should('eq', 'https://the-good-bad-and-last-airbender.vercel.app/#header')

  })

})