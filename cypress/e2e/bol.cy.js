describe("example to-do app", () => {
    beforeEach(() => {
      //  cy.setCookie("bolConsentChoices",'source#OFC|version#6|int-tran#true|ext-tran#true|int-beh#true|ext-beh#true',
     //   { domain :'http://www.bol.com'})
        cy.visit("https://www.bol.com/nl/nl/");
    });

    it("displays two todo items by default", () => {

        cy.get('[data-test="consent-modal-ofc-confirm-btn"]').click();

        cy.get(".todo-list li").should("have.length", 2);
        cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
        cy.get(".todo-list li").last().should("have.text", "Walk the dog");

        // 👇 That's how we take screenshot
        cy.argosScreenshot("with two items");
    });

    it("can add new todo items", () => {
        const newItem = "Feed the cat";
        cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);
        cy.get(".todo-list li")
            .should("have.length", 3)
            .last()
            .should("have.text", newItem);

        //👇 Here, an other screenshot will be taken
        cy.argosScreenshot("with an added item");
    });
});