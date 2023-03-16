/// <reference types="cypress" />
import productPage from "../support/pages/product.page.js";
import carrinhoPage from "../support/pages/carrinho.page.js";

describe("Operações no carrinho", () => {
  before(() => {
    cy.intercept(
      {
        method: "POST",
        url: "/product/augusta-pullover-jacket/",
      },
      { fixture: "produtoAdicionado.html" }
    );

    cy.intercept(
        {
          method: "POST",
          url: "/carrinho/",
        },
        { fixture: "produtoAtualizado.html" }
      );

    cy.intercept(
      {
        method: "GET",
        url: "/?removed_item=1",
      },
      { fixture: "produtoRemovido.html" }
    );
  });

  beforeEach(() => {
    cy.visit("/product/augusta-pullover-jacket/");
    productPage.compraProduto();
  });

  it.only("deve adicionar item no carrinho com sucesso", () => {
    productPage.validaMensagemAdicionado().should('have.text', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.');
  });

  it("deve atualizar um item do carrinho com sucesso", () => {
    let quantidade = Math.floor(Math.random() * 10);
    productPage.irParaCarrinho();
    carrinhoPage.atualizaCarrinho(quantidade);
    //carrinhoPage.validaMensagemAdicionado.should();
  });

  it("deve remover item do carrinho com sucesso", () => {
    productPage.irParaCarrinho();
    carrinhoPage.removeItem();
    //carrinhoPage.validaMensagemAdicionado.should();
  });
});
