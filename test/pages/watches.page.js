import Page from "./page.js";

class WatchesPage extends Page {
  get promoBanner() {
    return $$(".css-l3n1jj a")[2];
  }

  get watchesAnchorTab() {
    return $$("#anchor-tab div.css-11kfzci.e11ln19x1");
  }

  get kategoriLink() {
    return $("div.css-xml5xq");
  }

  get elektronikLink() {
    return $('.css-103qbjm a[href*="p/elektronik"]');
  }

  open() {
    return super.open("");
  }

  getWatchesAnchorTab() {
    return this.watchesAnchorTab.map(async (el) => {
      const elText = await el.getText();
      return elText;
    });
  }
}

export default new WatchesPage();
