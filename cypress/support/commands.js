Cypress.Commands.add("checkout", () => {
  const fd = new FormData();
  fd.append("billing_first_name", "Teste");
  fd.append("billing_last_name", "Teste");
  fd.append("billing_company", "");
  fd.append("billing_country", "BR");
  fd.append("billing_address_1", "Rua+Teste");
  fd.append("billing_address_2", "");
  fd.append("billing_city", "São+Paulo");
  fd.append("billing_state", "SP");
  fd.append("billing_postcode", "95600-000");
  fd.append("billing_phone", "99999999");
  fd.append("billing_email", "testeqa@mailinator.com");
  fd.append("account_password", "");
  fd.append("order_comments", "");
  fd.append("payment_method", "cod");
  fd.append("terms", "on");
  fd.append("terms-field", "1");
  fd.append("woocommerce-process-checkout-nonce", "b9a698393b");
  fd.append("_wp_http_referer", "/?wc-ajax=update_order_review");


  cy.request({
    url: "/?wc-ajax=checkout",
    method: "POST",
    body: fd,
  });

  cy.visit("/wp-admin");
});
