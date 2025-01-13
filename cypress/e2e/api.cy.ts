/// <reference types="cypress" />

describe("checkNavigation", () => {
  it("should fetch user details", () => {
    cy.request("GET", "/api/hello").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("text");
    });
  });
});
