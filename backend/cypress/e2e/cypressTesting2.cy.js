/* eslint-disable */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('link can be accessed', function() {
    cy.visit('http://localhost:3001')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})