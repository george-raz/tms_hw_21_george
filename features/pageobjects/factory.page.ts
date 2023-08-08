import ForgotPasswordPage from "./forgot.page.js";
import HomePage from "./home.page.js";

export default class PageFactory {
  static getPage(pageName:string) {
    switch (pageName) {
      case "HomePage":
        return new HomePage();
      case "ForgotPasswordPage":
        return new ForgotPasswordPage();
    }
  }
}