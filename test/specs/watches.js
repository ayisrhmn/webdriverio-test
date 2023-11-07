import { assert } from "chai";
import AllureReporter from "@wdio/allure-reporter";
import WatchesPage from "../pages/watches.page.js";
import { waitAndClick } from "../utils/helper.js";
import resources from "../resources/index.js";

describe("Tokopedia watches page", () => {
  before(async () => {
    await WatchesPage.open();
  });

  it("should move to link kategori > elektronik page", async () => {
    await WatchesPage.kategoriLink.moveTo();
    await waitAndClick(WatchesPage.elektronikLink, 5000);
  });

  it("should verify the watches anchor tab", async () => {
    AllureReporter.addSeverity("critical");

    const watchesAnchorTab = await WatchesPage.getWatchesAnchorTab();
    assert.deepEqual(watchesAnchorTab, resources.anchorTabList);
  });

  it("should show the banner container", async () => {
    AllureReporter.addSeverity("minor");

    const findEl = await WatchesPage.promoBanner;
    await expect(findEl).toBeDisplayed();
  });

  it("should contain link on banner and verify its clickable", async () => {
    AllureReporter.addSeverity("minor");

    const findEl = await WatchesPage.promoBanner;

    const tag = await findEl.getTagName();
    assert.equal(tag, "a");

    await expect(findEl).toHaveLinkContaining(
      resources.containingLinkPromoBanner
    );
    await expect(findEl).toBeClickable();
  });

  it("should click on banner and verify the new url", async () => {
    AllureReporter.addSeverity("minor");

    const findEl = await WatchesPage.promoBanner;
    await findEl.click();

    const url = await browser.getUrl();
    assert.include(url, resources.containingLinkPromoBanner);

    await expect(browser).toHaveUrlContaining(
      resources.containingLinkPromoBanner
    );
  });
});
