const loginPage = require('../support/pages/loginPage')
const homePage = require('../support/pages/homePage')

describe('User Login Scenarios', () => {
  it('With Valid Data', () => {
    loginPage.visitLoginPage()
 
    loginPage.verifyLoginPage()
    loginPage.inputEmail()
    loginPage.inputPassword()
    loginPage.clickButtonLogin()
 
    homePage.verifyHomePageAppears()
    
  })

  it('With Invalid Email', () => {
    loginPage.visitLoginPage()
 
    loginPage.verifyLoginPage()
    loginPage.inputInvalidEmail()
    loginPage.inputPassword()
    loginPage.clickButtonLogin()

    loginPage.verifyInvalidEmailAlert()
    homePage.verifyHomePageNotAppears()
    
  })

  it('With Invalid Password', () => {
    loginPage.visitLoginPage()
 
    loginPage.verifyLoginPage()
    loginPage.inputEmail()
    loginPage.inputInvalidPassword()
    loginPage.clickButtonLogin()

    loginPage.verifyInvalidPasswordAlert()
    homePage.verifyHomePageNotAppears()
    
  })

  it('With Empty Data', () => {
    loginPage.visitLoginPage()
 
    loginPage.verifyLoginPage()
    loginPage.clickButtonLogin()

    loginPage.verifyEmptyEmailAlert()
    homePage.verifyHomePageNotAppears()
    
  })

})

