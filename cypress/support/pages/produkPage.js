const locator = require('../locators/produkPageLocator.js')
const data = require('../data-test/produkData.js')

class produkPage {
    async verifyProdukPage() {
        cy.xpath(locator.elementId.tambah_button).should('exist')
        cy.get(locator.elementId.cari_input).should('exist')
        cy.xpath(locator.elementId.code_column).should('exist')
        cy.xpath(locator.elementId.nama_column).should('exist')
        cy.xpath(locator.elementId.kategori_column).should('exist')
    } 
    async clickButtonTambah() {
        cy.xpath(locator.elementId.tambah_button).click()
    } 

    async verifyTambahProdukPage() {
        cy.xpath(locator.elementId.kode_input).should('exist')
        cy.xpath(locator.elementId.nama_input).should('exist')
        cy.xpath(locator.elementId.deskripsi_input).should('exist')
        cy.xpath(locator.elementId.hargabeli_input).should('exist')
        cy.xpath(locator.elementId.hargajual_input).should('exist')
        cy.xpath(locator.elementId.stok_input).should('exist')
        cy.xpath(locator.elementId.kategori_input).should('exist')
    } 

    async inputData() {
        cy.xpath(locator.elementId.nama_input).type(data.nama)
        cy.xpath(locator.elementId.deskripsi_input).type(data.deskripsi)
        cy.xpath(locator.elementId.hargabeli_input).type(data.hargabeli)
        cy.xpath(locator.elementId.hargajual_input).type(data.hargajual)
        cy.xpath(locator.elementId.stok_input).type(data.stok)
    }
    async clickInputKategori() {
        cy.xpath(locator.elementId.kategori_input).click()
    } 
    async verifyDaftarKategori()  {
        cy.wait(1000)
        
        cy.xpath(locator.elementId.selectedKategori)
        .should('exist')
    }

    async verifySuksesMenyimpan()  {
        cy.wait(2000)
        
        cy.xpath(locator.elementId.SimpanSukses_alert)
        .should('be.visible')
        .and('contains.text','success')
    }

    async clickSelectedKategori() {
        cy.xpath(locator.elementId.selectedKategori).click()
    } 
    async clickButtonSimpan() {
        cy.xpath(locator.elementId.simpan_button).click()
    }
    
    async verifyEmptyDataAlert() {
        cy.xpath(locator.elementId.EmptyData_alert).should('exist')
    }
}

module.exports = new produkPage()