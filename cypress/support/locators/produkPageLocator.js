const data = require('../data-test/produkData.js')
const { clickSelectedKategori } = require('../pages/produkPage.js')

module.exports = {
    elementId: {
        cari_input: '.chakra-input',
        tambah_button: '//*[contains(text(), "tambah")]',
        code_column: '//*[contains(text(), "code")]',
        nama_column: '//*[contains(text(), "nama")]',
        kategori_column: '//*[contains(text(), "kategori")]',
        hargabeli_column: '//*[contains(text(), "harga beli")]',

        kode_input : '//input[@id="kode"]',
        nama_input : '//input[@id="nama"]',
        deskripsi_input : '//input[@id="deskripsi"]',
        hargabeli_input : '//input[@id="harga beli"]',
        hargajual_input : '//input[@id="harga jual"]',
        stok_input : '//input[@id="stok"]',
        kategori_input : '//input[@id="kategori"]',
        simpan_button : '//button[contains(text(), "simpan")]',
        
        selectedKategori : '(//table[@role="table"]//td[contains(text(),"Buah")])[1]',
        SimpanSukses_alert : '//*[contains(text(), "success")]',
        EmptyData_alert : '//*[contains(text(), "is not allowed to be empty")]',
        
    }
}