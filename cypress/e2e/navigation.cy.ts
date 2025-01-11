
/// <reference types="cypress" />

describe('checkNavigation', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })
  it('check navigation', () => {
      cy.get('[data-test-id="cypress-nav-Resume"]')
      .should("exist")
      .click({multiple: true })     
      cy.get('[data-test-id="cypress-nav-Projects"]')
      .should("exist")
      .click({multiple: true })     
      cy.get('[data-test-id="cypress-nav-About"]')
      .should("exist")
      .click({multiple: true })     
  })
})
