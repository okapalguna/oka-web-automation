const locator = require('../locators/loginPageLocator.js')
const data = require('../data-test/loginData.js')

class loginPage {
    
    async visitLoginPage() {
        cy.visit(data.webURLtesting)
    }

    async verifyLoginPage() {
        cy.xpath(locator.elementId.email_input).should('exist')
        cy.xpath(locator.elementId.password_input).should('exist')
        cy.xpath(locator.elementId.login_button).should('exist')
        cy.xpath(locator.elementId.register_link).should('exist')
    }

    async verifyInvalidEmailAlert() {
        cy.xpath(locator.elementId.InvalidEmail_alert).should('exist')
    } 

    async verifyInvalidPasswordAlert() {
        cy.xpath(locator.elementId.InvalidPassword_alert).should('exist')
    } 

    async verifyEmptyEmailAlert() {
        cy.xpath(locator.elementId.EmptyEmail_alert).should('exist')
    } 

    async inputEmail() {
        cy.xpath(locator.elementId.email_input).type(data.validEmail) 
    }
    async inputPassword() {
        cy.xpath(locator.elementId.password_input).type(data.validPassword)
    }

    async inputInvalidEmail() {
        cy.xpath(locator.elementId.email_input).type(data.invalidEmail) 
    }
    async inputInvalidPassword() {
        cy.xpath(locator.elementId.password_input).type(data.invalidPassword) 
    }

    async clickButtonLogin() {
        cy.xpath(locator.elementId.login_button).click()
    }

    async clickLinkRegister() {
        cy.xpath(locator.elementId.register_link).click()
    }


}

module.exports = new loginPage()