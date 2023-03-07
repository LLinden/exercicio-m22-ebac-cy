/// <reference types="Cypress" />

class Carrinho {
  atualizaCarrinho(valor) {
    cy.get(".quantity > .input-text").clear().type(valor);
    cy.get(".pull-right > .btn").click();
  }

  validaMensagemAdicionado() {
    cy.get(".woocommerce-message");
  }

  removeItem() {
    cy.get(".remove > .fa").click();
  }
}
export default new Carrinho();
