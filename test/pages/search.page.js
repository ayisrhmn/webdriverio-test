import Page from "./page.js";

class SearchPage extends Page {
  get searchInput() {
    return $("div.css-v1hkkg.e1v32nag0 input");
  }

  open() {
    return super.open("");
  }
}

export default new SearchPage();
