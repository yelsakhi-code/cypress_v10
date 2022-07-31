
describe("render the home page",()=>{
    beforeEach(() => {
        cyan.visit("/");
    });

    it("renderss correctly", () => {
        cy.get("#container").should("exist");
        cy.intercept("https:www.balldontlie.io/api/games", {games: 1});
    })

})