import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Your application's base URL
    supportFile: 'cypress/support/index.js', // Path to the support file
    specPattern: 'cypress/integration/**/*.cy.js', // Test file pattern
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
