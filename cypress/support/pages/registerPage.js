const locator = require('../locators/registerPageLocator.js')
const data = require('../data-test/RegisterData.js')

class registerPage {
    
    async verifyRegisterPage() {
        cy.xpath(locator.elementId.namatoko_input).should('exist')
        cy.xpath(locator.elementId.email_input).should('exist')
        cy.xpath(locator.elementId.password_input).should('exist')
        cy.xpath(locator.elementId.daftar_button).should('exist')
        cy.xpath(locator.elementId.login_link).should('exist')
    }

    async inputNamaToko() {
        cy.xpath(locator.elementId.namatoko_input).type(data.validName) 
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

    async clickButtonDaftar() {
        cy.xpath(locator.elementId.daftar_button).click()
    }

    async verifyRegisterSukses(){
        cy.wait(1000)
        
        cy.xpath(locator.elementId.RegisterSukses_alert)
        .should('be.visible')
        .and('contains.text','Toko berhasil didaftarkan')
    }

    async verifyInvalidEmailAlert() {
        cy.xpath(locator.elementId.InvalidEmail_alert).should('exist')
    } 
    async verifyEmptyDataAlert() {
        cy.xpath(locator.elementId.EmptyData_alert).should('exist')
    } 
}
module.exports = new registerPage()