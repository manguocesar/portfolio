/// <reference types="cypress" />

// Arrange-Act-Assert (AAA) Pattern:

// Arrange: Set up your test data or environment.
// Act: Perform actions like clicking or typing.
// Assert: Verify the expected outcomes.

describe("checkNavigation", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:3000/");
  });
  it("visit the app 3 pages", () => {
    cy.get('[data-test-id="cypress-nav-Resume"]', { timeout: 3000 })
      .should("exist")
      .click({ multiple: true });
    cy.get('[data-test-id="cypress-nav-Projects"]')
      .should("exist")
      .click({ multiple: true });
    cy.get('[data-test-id="cypress-nav-About"]')
      .should("exist")
      .click({ multiple: true });
      cy.get('[data-cy="change-theme"]').click();
  });
  afterEach(() => {
    cy.visit("http://localhost:3000/");
  });
});
