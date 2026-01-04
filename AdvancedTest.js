const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('./LoginPage');

(async function automationExpertTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    let loginPage = new LoginPage(driver);

    try {
        await driver.get('https://the-internet.herokuapp.com/login');
        
        // Testăm un flux negativ (parolă greșită)
        await loginPage.login('user_invalid', 'parola_gresita');
        await driver.wait(until.elementLocated(By.id('flash')), 5000);
        
        // Testăm fluxul pozitiv
        await driver.navigate().refresh();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        
        console.log("Test de regresie finalizat cu succes: POM aplicat.");
    } finally {
        await driver.quit();
    }
})();
