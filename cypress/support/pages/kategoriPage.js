const locator = require('../locators/kategoriPageLocator.js')
const data = require('../data-test/kategoriData.js')

class kategoriPage {
    async verifyKategoriPage() {
        cy.xpath(locator.elementId.tambah_button).should('exist')
        cy.get(locator.elementId.cari_input).should('exist')
        cy.xpath(locator.elementId.nama_Column).should('exist')
        cy.xpath(locator.elementId.deskripsi_Column).should('exist')
    } 
    async clickButtonTambah() {
        cy.xpath(locator.elementId.tambah_button).click()
    } 
    async verifyTambahKategoriPage() {
        cy.xpath(locator.elementId.nama_input).should('exist')
        cy.xpath(locator.elementId.deskripsi_input).should('exist')
        cy.xpath(locator.elementId.simpan_button).should('exist')
    } 

    async inputNama() {
        cy.xpath(locator.elementId.nama_input).type(data.nama)
    } 
    
    async inputDeskripsi() {
        cy.xpath(locator.elementId.deskripsi_input).type(data.deskripsi)
    } 

    async clickButtonSimpan() {
        cy.xpath(locator.elementId.simpan_button).click()
    }

    async verifySuksesMenyimpan()  {
        cy.wait(2000)
        
        cy.xpath(locator.elementId.SimpanSukses_alert)
        .should('be.visible')
        .and('contains.text','success')
    }

    async verifyEmptyDataAlert() {
        cy.xpath(locator.elementId.EmptyData_alert).should('exist')
    }
}

module.exports = new kategoriPage()