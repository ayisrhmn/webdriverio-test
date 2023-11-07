import AllureReporter from "@wdio/allure-reporter";
import SearchPage from "../pages/search.page.js";
import resources from "../resources/index.js";

describe("Tokopedia product search", () => {
  before(async () => {
    await SearchPage.open();
  });

  it("should open the main url and verify the title", async () => {
    AllureReporter.addSeverity("minor");

    await expect(browser).toHaveTitle(resources.homeTitle);
  });

  it("should search for a product and verify the search text value", async () => {
    AllureReporter.addSeverity("critical");

    await SearchPage.searchInput.addValue("Laptop");
    await browser.keys("Enter");

    await expect(SearchPage.searchInput).toHaveValue("Laptop");
  });

  it("should redirect to a new page and verify the title", async () => {
    AllureReporter.addSeverity("minor");

    await expect(browser).toHaveTitle(resources.afterSearchTitle);
  });
});
