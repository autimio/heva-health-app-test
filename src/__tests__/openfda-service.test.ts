import { buildFoodEnforcementUrl } from "../services/openfda";

it("builds URL without search when empty", () => {
  const url = buildFoodEnforcementUrl({});
  expect(url).toMatch(/\/food\/enforcement\.json\?limit=50$/);
});

it("includes text query and classification", () => {
  const url = buildFoodEnforcementUrl({
    query: 'milk "test"',
    classification: "Class I",
    limit: 10,
  });
  expect(url).toContain("limit=10");
  expect(url).toContain("search=");
  expect(decodeURIComponent(url)).toContain(
    'product_description:"milk \\"test\\""'
  );
  expect(decodeURIComponent(url)).toContain('classification:"Class I"');
});
