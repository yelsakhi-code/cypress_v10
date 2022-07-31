
describe('intecept', {​​​​​​baseUrl: 'https://www.facebook.com/'}​​​​​​,  () => {​​​​​​ 
   beforeEach(() => {​​​​​​           cy.visit('/');    }​​​​​​)    
 it('Title and URL Assertions ', () => {​​​​​​  
          cy.url().should('eq', 'https://www.facebook.com/')    
 }​​​​​​);   
 }​​​​​​);

