
const loginPage = require('../support/pages/loginPage.js');
const homePage = require('../support/pages/homePage.js');
const produkPage = require('../support/pages/produkPage.js');

describe('Tambah Produk Scenarios', () => {
    beforeEach(() => { // precondition
        loginPage.visitLoginPage()
        loginPage.verifyLoginPage()
        loginPage.inputEmail()
        loginPage.inputPassword()
        loginPage.clickButtonLogin()
        homePage.verifyHomePageAppears()
        homePage.clickPanelProduk()
        produkPage.verifyProdukPage()
    });

  it('With Valid Data', () => {
    produkPage.clickButtonTambah()
    produkPage.verifyTambahProdukPage()
    produkPage.inputData()
    produkPage.clickInputKategori()
    produkPage.verifyDaftarKategori()
    produkPage.clickSelectedKategori()
    produkPage.clickButtonSimpan()
    produkPage.verifySuksesMenyimpan() 
  }) 
  it('With Empty Data', () => {
    produkPage.clickButtonTambah()
    produkPage.verifyTambahProdukPage()
  
    produkPage.clickButtonSimpan()
    produkPage.verifyEmptyDataAlert() 
  }) 


})

