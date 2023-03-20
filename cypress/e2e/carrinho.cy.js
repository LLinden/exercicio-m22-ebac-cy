/// <reference types="cypress" />
import productPage from "../support/pages/product.page.js";
import carrinhoPage from "../support/pages/carrinho.page.js";
const fragments = require("../fixtures/fragments.json");
const fragments2 = require("../fixtures/fragments2.json");

describe("Operações no carrinho", () => {
  before(() => {
    cy.intercept(
      {
        method: "POST",
        url: "/?wc-ajax=get_refreshed_fragments",
      },
      (req) => {
        req.reply({
          statusCode: 200,
          body: JSON.stringify(fragments),
        });
      }
    );

    cy.intercept(
        {
          method: "POST",
          url: "/wp-admin/admin-ajax.php",
        },
        (req) => {
          req.reply({
            statusCode: 200,
            body: JSON.stringify(fragments2),
          });
        }
      );

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

  it("deve adicionar item no carrinho com sucesso", () => {
    let mensagem =
      "\n                      Ver carrinho\n                      “Augusta Pullover Jacket” foi adicionado no\n                      seu carrinho.\n                    ";
    productPage.validaMensagemAdicionado(mensagem);
  });

  it.only("deve atualizar um item do carrinho com sucesso", () => {
    let mensagem = "";
    let quantidade = Math.floor(Math.random() * 10);
    productPage.irParaCarrinho();
    carrinhoPage.atualizaCarrinho(quantidade);
    carrinhoPage.validaMensagemAdicionado(mensagem);
  });

  it("deve remover item do carrinho com sucesso", () => {
    let mensagem = "";
    productPage.irParaCarrinho();
    carrinhoPage.removeItem();
    carrinhoPage.validaMensagemAdicionado(mensagem);
  });
});
