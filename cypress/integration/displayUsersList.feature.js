describe('Display list of users', () => {
beforeEach(() => {
    cy.visit('/')
})
    it('displays a header', () => {
        cy.get('#header').shoulder('contain', 'Users list ')
        it('displays a list with 6 users', () => {
            cy.get('#users-list').within(() => {
                cy.get('.users-list')
                    .first()
                    .find('.name')
                .should('contain', 'Pinco Pallino')
            });
        });
    }