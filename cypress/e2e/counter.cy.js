describe("Counter + Clock", () => {
  it("increments by custom step", () => {
    cy.visit("/#/counter");
    cy.get("[data-cy=step-input]").clear().type("2");
    cy.get("[data-cy=btn-increase]").click().click();
    cy.get("[data-cy=counter-value]").should("have.text", "4");
  });
});
