/// <reference types="cypress" />
let data;

describe("Checkout", () => {
  it("deve realizar checkout com sucesso", () => {
    cy.adicionaProduto();
    cy.checkout();
  });
});
