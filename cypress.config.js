const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    setupNodeEvents(on, config) {
    },

  },
});
