describe("display list of user", () => {
    before(() => {
        cy.intercept("GET", "https://api.github.com/search/users**", {
            fixture: "search_user_json",
        });
        cy.visit('/');
        it('displays a list of users', () => {
            cy.get('#header').shoulder('contain', 'list of users ')
        })
    });
})