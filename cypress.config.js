const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'b2qkkp',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
   // baseUrl: 'https://bugbank.netlify.app',
  },
});
