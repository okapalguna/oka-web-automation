const locator = require('../locators/homePageLocator.js')

class homePage {
    async verifyHomePageAppears() {
        cy.xpath(locator.elementId.dashboard_panel).should('exist')
        cy.xpath(locator.elementId.penjualan_panel).should('exist')
        cy.xpath(locator.elementId.pembelian_panel).should('exist')
        cy.xpath(locator.elementId.kategori_panel).should('exist')
        cy.xpath(locator.elementId.produk_panel).should('exist')
        cy.xpath(locator.elementId.pengguna_panel).should('exist')
        cy.xpath(locator.elementId.pelanggan_panel).should('exist')
    } 

    async verifyHomePageNotAppears() {
        cy.xpath(locator.elementId.dashboard_panel).should('not.exist')
        cy.xpath(locator.elementId.penjualan_panel).should('not.exist')
        cy.xpath(locator.elementId.pembelian_panel).should('not.exist')
        cy.xpath(locator.elementId.kategori_panel).should('not.exist')
        cy.xpath(locator.elementId.produk_panel).should('not.exist')
        cy.xpath(locator.elementId.pengguna_panel).should('not.exist')
        cy.xpath(locator.elementId.pelanggan_panel).should('not.exist')
    }
    async clickPanelKategori() {
        cy.xpath(locator.elementId.kategori_panel).click()
    }
    
    async clickPanelProduk() {
        cy.xpath(locator.elementId.produk_panel).click()
    }
}

module.exports = new homePage()
