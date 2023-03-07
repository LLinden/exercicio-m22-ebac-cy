/// <reference types="cypress" />
const dados = require("../fixtures/addToCart.json");
const dados = require("../fixtures/removeFromCart.html");
import homePagePage from "../support/pages/homePage.page.js";
import productPage from "../support/pages/product.page.js";
import carrinhoPage from "../support/pages/carrinho.page.js";

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
          body: `${req.query.callback}(
              ${JSON.stringify(dados.fragments)}
                )`,
        });
      }
    );

    cy.intercept(
        {
          method: "GET",
          url: "/?removed_item=1",
        },
        (req) => {
          req.reply({
            statusCode: 200,
            body: `${req.query.callback}(
                ${JSON.stringify(dados.fragments)}
                  )`,
          });
        }
      );
  });

  beforeEach(() => {
    cy.visit("/");
    homePagePage.adicionaProdutoNoCarrinho();
    productPage.compraProduto();
  });

  it("deve adicionar item no carrinho com sucesso", () => {
    productPage.validaMensagemAdicionado().should("have.property", "cart_hash");
  });

  it("deve atualizar um item do carrinho com sucesso", () => {
    let quantidade = Math.floor(Math.random() * 10);
    productPage.irParaCarrinho();
    carrinhoPage.atualizaCarrinho(quantidade);
    //carrinhoPage.validaMensagemAdicionado.should();

  });

  it.only("deve remover item do carrinho com sucesso", () => {
    productPage.irParaCarrinho();
    carrinhoPage.removeItem();
    //carrinhoPage.validaMensagemAdicionado.should();
  });
});
