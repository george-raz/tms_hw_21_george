import { Selector } from "webdriverio";
import BasePage from "./base.page.js";


export default class ForgotPasswordPage extends BasePage {
  public readonly url: string = "https://account.envato.com/reset_password?to=audiojungle";

  get userNameErrorMsg () {
    return $$("//div[@data-testid='username-error']");
  }

  get emailErrorMsg () {
    return $$("//div[@data-testid='email-error']");
  }

  get btnSubmit () {
    return $("//button[@data-testid='submitButton']")
  }

  get inputEmail () {
    return $("//input[@id='email']")
  }

  get title () {
    return $("//div[@data-testid='requestResetFormTitle']");
  }
  get description () {
    return $("//div[@class='sc-gEvEer Xzwsn sc-fPXMVe sc-bmzYkS jAwgXy jMJQjw']");
  }

  async open () {
    return await super.open(this.url)
  }
}