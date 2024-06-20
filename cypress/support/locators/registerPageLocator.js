module.exports = {
    elementId: {
        namatoko_input:'//*[@id="name"]',
        email_input: '//*[@id="email"]',
        password_input: '//*[@id="password"]',
        daftar_button: '//button[contains(text(), "daftar")]',
        login_link: '//*[@href="/login"]',
        
        InvalidEmail_alert: '//*[contains(text(), "must be a valid email")]',
        EmptyData_alert: '//*[contains(text(), "is not allowed to be empty")]',

        RegisterSukses_alert : '//*[contains(text(), "berhasil")]'    
    }
}