describe("OpenFDA Data", () => {
  it("filters by classification and text with stubbed API", () => {
    cy.intercept("GET", "https://api.fda.gov/food/enforcement.json*", (req) => {
      const body = {
        meta: {
          disclaimer: "",
          terms: "",
          license: "",
          last_updated: "2025-01-01",
          results: { skip: 0, limit: 50, total: 1 },
        },
        results: [
          {
            recall_number: "F-1234",
            classification: "Class I",
            recalling_firm: "Acme Foods",
            product_description: "Sample Product",
            reason_for_recall: "Potential contamination",
            city: "New York",
            state: "NY",
            report_date: "20250101",
          },
        ],
      };
      req.reply({ statusCode: 200, body });
    }).as("openfda");

    cy.visit("/#/fda");
    cy.get('select[aria-label="Classification"]').select("Class I");
    cy.get('input[placeholder="Filter text (product, reason, firm)"]').type(
      "contamination"
    );
    cy.wait("@openfda");
    cy.contains("th", "Recall #").should("be.visible");
    cy.contains("td", "Acme Foods").should("be.visible");
  });
});
