const loginPage = require("../support/pages/loginPage.js")
const registerPage = require("../support/pages/registerPage.js")


describe('User Register Scenarios', () => {
    it('With Valid Data', () => {
      loginPage.visitLoginPage()
      loginPage.verifyLoginPage()
      loginPage.clickLinkRegister()

      registerPage.verifyRegisterPage()
      registerPage.inputNamaToko()
      registerPage.inputEmail()
      registerPage.inputPassword()
      registerPage.clickButtonDaftar()
      
      registerPage.verifyRegisterSukses()
      loginPage.verifyLoginPage()
    })

    it('With Invalid Email', () => {
        loginPage.visitLoginPage()
        loginPage.verifyLoginPage()
        loginPage.clickLinkRegister()
  
        registerPage.verifyRegisterPage()
        registerPage.inputNamaToko()
        registerPage.inputInvalidEmail()
        registerPage.inputPassword()
        registerPage.clickButtonDaftar()
        
        registerPage.verifyInvalidEmailAlert()
        registerPage.verifyRegisterPage()
      })

      it('With Empty Data', () => {
        loginPage.visitLoginPage()
        loginPage.verifyLoginPage()
        loginPage.clickLinkRegister()
  
        registerPage.verifyRegisterPage()

        registerPage.clickButtonDaftar()
        
        registerPage.verifyEmptyDataAlert()
        registerPage.verifyRegisterPage()
      })
  })
