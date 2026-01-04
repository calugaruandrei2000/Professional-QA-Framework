class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameField = By.id('username');
        this.passwordField = By.id('password');
        this.loginButton = By.css('button[type="submit"]');
    }
    async login(user, pass) {
        await this.driver.findElement(this.usernameField).sendKeys(user);
        await this.driver.findElement(this.passwordField).sendKeys(pass);
        await this.driver.findElement(this.loginButton).click();
    }
}
module.exports = LoginPage;
