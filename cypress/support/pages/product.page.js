/// <reference types="Cypress" />

class Product {
  compraProduto() {
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Blue').click();
    cy.get(".single_add_to_cart_button").click();
  }

  validaMensagemAdicionado() {
    cy.get(".woocommerce-message");
  }

  irParaCarrinho() {
    cy.get(".dropdown-toggle > .text-skin > .icon-basket").click();
    cy.get(".view-cart").click();
  }
}
export default new Product();
