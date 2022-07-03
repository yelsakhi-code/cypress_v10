
describe('Login', () => {
    beforeEach(() => {
        // vist amazon site
       // var dir = process.cwd()
// 👇️ if using ES6 Modules syntax
// import { resolve } from 'path';
       cy.visit('/')
    })
  
    it('login with wrong username', () => {
      cy.get(locators.searchBox).type(testData.product1)
      
      // click login
      // enter wrong user name
      // enter dommy password
      // validate error message 
    })
  })

  
  