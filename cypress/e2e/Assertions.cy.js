describe('intecept', {baseUrl: 'https://www.facebook.com/'},  () => {
    beforeEach(() => {  
         cy.visit('/');
    })
    it('Title and URL Assertions ', () => {
        cy.url().should('include', 'https://www.facebook.com')
        cy.url().should('include', 'facebook')
    });
    it('login button Assertions', () => {
        cy.get("[data-testid='royal_login_button']").should('have.value', 'Log In').and('be.visible').and('exist')
    });
    it('create new account button validation', () => {
       cy.get("[data-testid='open-registration-form-button']").should('not.exist')
       cy.get("[data-testid='royal_login_button']").should('have.value', 'Log In').and('be.visible').and('exist').click()
       cy.contains("a[role='button']", 'Create new account' ).should('be.visible')

    });
    
});
 