describe('Display list of users', () => {
beforeEach(() => {
    cy.visit('/')
})
    it('displays a header', () => {
        cy.get('#header').shoulder('contain', 'Users list ')
    });
})