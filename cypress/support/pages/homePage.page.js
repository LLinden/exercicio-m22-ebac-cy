/// <reference types="Cypress" />

class HomePage {
  selecionaMinhaConta() {
    cy.get(".icon-user-unfollow").click();
  }

  adicionaProdutoNoCarrinho() {
    cy.get(".products > .row > .post-8893").first().click();
  }
}
export default new HomePage();
