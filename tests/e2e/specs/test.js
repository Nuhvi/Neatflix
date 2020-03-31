// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  xit("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("a", "Home");
  });
});
