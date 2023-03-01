/// <reference types="Cypress" />
import {faker} from "@faker-js/faker"
import homePagePage from "../support/pages/homePage.page";
import minhaContaPage from "../support/pages/minhaConta.page";

let dados

describe('Criação de nova conta', () => {
    
    beforeEach(() => {
        cy.visit('/')
        homePagePage.selecionaMinhaConta()
        cy.fixture("dados.json").then((p) => {
            dados = p;
          });
    });

    it.only('deve criar nova conta com sucesso', () => {
        let email = faker.internet.email();
        minhaContaPage.preencheEmailSenha(email, dados.senha);
    });

    it('deve exibir mensagem de email inválido', () => {
        
    });

    it('deve exibir mensagem de senha inválida', () => {
        
    });

    it('deve exibir mensagem de email já cadastrado', () => {
        
    });
});