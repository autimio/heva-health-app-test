// Handle uncaught exceptions to avoid test failures on benign errors
Cypress.on("uncaught:exception", () => false);
