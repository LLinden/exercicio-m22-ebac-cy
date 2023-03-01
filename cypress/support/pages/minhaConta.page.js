/// <reference types="Cypress" />

class MinhaConta {
  preencheEmailSenha(email, senha) {
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(senha, { log: false });
    cy.get(".button").contains("Register").click();
    cy.get('.page-title').contains("Minha conta").should("be.visible");
  }
}
export default new MinhaConta();
