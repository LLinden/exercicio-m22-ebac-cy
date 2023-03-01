/// <reference types="cypress" />
let data;

describe("Checkout", () => {
  beforeEach(() => {
    cy.fixture("dados.json").then((p) => {
      data = p;
      cy.visit('/');
    });
  });

  it("deve realizar checkout com sucesso", () => {
    //
  });
});
