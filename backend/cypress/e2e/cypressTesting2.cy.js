/* eslint-disable */
describe('BLOG LogIn', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Open application')
  })

  it('link can be accessed', function() {
    cy.visit('http://localhost:3001')
    cy.get('#inputUsername').type('username 1')
    cy.get('#inputPassword').type('salasana')
    cy.get('#buttonLogin').click()
  })
})