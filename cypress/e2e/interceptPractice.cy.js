describe('intecept', {baseUrl: 'https://jsonplaceholder.typicode.com'},  () => {
    beforeEach(() => {  
         cy.visit('/');
    })
    it('intercept post request', () => {
        cy.intercept('GET', '/posts',{totalpost: 5}).as('inteceptPost')
        cy.get("table:nth-of-type(1) a[href='/posts']").click();
        cy.wait('@inteceptPost')
    });
    
});
 