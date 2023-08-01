import { Given, When, Then } from '@wdio/cucumber-framework';
import ForgotPasswordPage from '../pageobjects/forgot.page.js';
import PageFactory from '../pageobjects/factory.page.js';


const forgotPassword = PageFactory.getPage("ForgotPasswordPage") as ForgotPasswordPage;

Given(/^I am on the forgot password page$/, async () => {
    await forgotPassword.open();
});
When(/^I see the page$/, async () => {
    await browser.waitUntil(async () => {
      return (await forgotPassword.title)
    },{
     timeout: 5000,
     timeoutMsg: "Failed" 
    })
});
Then(/^I see title (.*) and description (.*)$/, async (title, description) => {
    await expect(await forgotPassword.title.getText()).toStrictEqual("Forgot password?");
    await expect(await forgotPassword.description.getText()).toStrictEqual("Enter your details below to request an Envato account password reset.");
});

When(/^I click "submit" button$/, async () => {
    await forgotPassword.clickElem(await forgotPassword.btnSubmit); 
});
Then(/^I see error messages for username (.*), email (.*)$/, async (a, b) => {
    await expect(await forgotPassword.userNameErrorMsg[0].getText()).toStrictEqual("Username is required");
    await expect(await forgotPassword.emailErrorMsg[0].getText()).toStrictEqual("Email is required");
});

When(/^I enter invalid email/, async () => {
    await forgotPassword.fillInput(await forgotPassword.inputEmail, "email.com");
});

Then(/^I see error message for email input "Email is invalid"$/, async () => {
    await expect(await forgotPassword.emailErrorMsg[0].getText()).toStrictEqual("Email is invalid");
});

When(/^I enter valid email/, async () => {
    await forgotPassword.fillInput(await forgotPassword.inputEmail, "email@test.com");
});

Then(/^Error message for email input disappears$/, async () => {
    await expect(await forgotPassword.emailErrorMsg.length).toBe(0);
});

When(/^I refresh the page/, async () => {
    await forgotPassword.refresh();
});

Then(/^Error messages are gone$/, async () => {
    await expect(await forgotPassword.emailErrorMsg.length).toBe(0);
    await expect(await forgotPassword.userNameErrorMsg.length).toBe(0);
});