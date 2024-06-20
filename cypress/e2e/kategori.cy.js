
const loginPage = require('../support/pages/loginPage');
const homePage = require('../support/pages/homePage');
const kategoriPage = require('../support/pages/kategoriPage');

describe('Tambah Kategori Scenarios', () => {
    beforeEach(() => { // precondition
        loginPage.visitLoginPage()
        loginPage.verifyLoginPage()
        loginPage.inputEmail()
        loginPage.inputPassword()
        loginPage.clickButtonLogin()
        homePage.verifyHomePageAppears()
        homePage.clickPanelKategori()
        kategoriPage.verifyKategoriPage()
    });

  it('With Valid Data', () => {
    kategoriPage.clickButtonTambah()
    kategoriPage.verifyTambahKategoriPage()

    kategoriPage.inputNama()
    kategoriPage.inputDeskripsi()
    kategoriPage.clickButtonSimpan()
    kategoriPage.verifySuksesMenyimpan()
  })

  it('With Empty Data', () => {

    kategoriPage.clickButtonTambah()
    kategoriPage.verifyTambahKategoriPage()
    
    kategoriPage.clickButtonSimpan()
    kategoriPage.verifyEmptyDataAlert()
  })


})

