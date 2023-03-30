describe("example to-do app", () => {
    beforeEach(() => {
     //  cy.setCookie("bolConsentChoices",'source#OFC|version#6|int-tran#true|ext-tran#true|int-beh#true|ext-beh#true',{ domain :'http://www.bol.com'})
        cy.visit("https://www.bol.com/nl/nl/");
        cy.get('[data-test="consent-modal-ofc-confirm-btn"]').last().click();
    });

    it("homepage", () => {
        // 👇 That's how we take screenshot
        cy.argosScreenshot('HomePage', { blackout: ['[data-test="main-banner-image"]'] });
    });

    it("Login", () => {
        cy.visit('https://www.bol.com/nl/account/login.html?redirectUrl=/nl/rnwy/account/overzicht')
        cy.argosScreenshot("Login");
    });

    it("Klantenservice", () => {
        cy.visit('https://www.bol.com/nl/nl/klantenservice/index.html')
        cy.argosScreenshot("Klantenservice");
    });


});