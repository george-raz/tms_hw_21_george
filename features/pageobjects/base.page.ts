import { Selector } from "webdriverio";

export default class BasePage {
  
  async refresh() {
    return browser.refresh();
  }

  async fillInput(elem:Selector, value:string) {
    await $(elem).setValue(value);
  }

  async clickElem(elem: Selector) {
    await $(elem).click();
  }

  async isEnabled(elem:Selector) {
    await $(elem).isEnabled()
  }

  async open(path:string) {
    return await browser.url(path)
  }

}