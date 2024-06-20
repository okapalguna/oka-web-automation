module.exports = {
    elementId: {
        email_input: '//*[@id="email"]',
        password_input: '//*[@id="password"]',
        login_button: '//button[contains(text(), "login")]',
        register_link: '//*[@href="/register"]',
        
        InvalidEmail_alert: '//*[contains(text(), "must be a valid email")]',
        InvalidPassword_alert: '//*[contains(text(), "Kredensial yang Anda berikan salah")]',
        EmptyEmail_alert: '//*[contains(text(), "is not allowed to be empty")]'

    }
}