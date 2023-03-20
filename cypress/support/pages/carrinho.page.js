/// <reference types="Cypress" />

class Carrinho {
  atualizaCarrinho(valor) {
    cy.get(".quantity > .input-text").clear().type(valor);
    cy.get(".pull-right > .btn").click();
  }

  validaMensagemAdicionado(mensagem) {
    cy.get(".woocommerce-message").should('have.text', mensagem);
  }

  removeItem() {
    cy.get(".remove > .fa").click();
  }
}
export default new Carrinho();
