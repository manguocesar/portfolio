import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Your application's base URL
    supportFile: false, // Path to the support file
    specPattern: 'cypress/e2e/*.cy.ts', // Test file pattern
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
