const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/mochawesome",
      overwrite: false,
      reportFilename: "index.html",
      html: true,
      json: false,
    },
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
