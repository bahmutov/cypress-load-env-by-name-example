// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('checks the page', () => {
  cy.visit('/')
  cy.contains('h1', Cypress.env('greeting'))
})
