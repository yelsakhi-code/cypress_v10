

describe('intercept with youtube practice',{baseUrl: 'https://practice.automationbro.com/'},()=>{

//Open Cypress set ".only"
beforeEach(() => {
    cy.visit('/')
  })
it('Test api with simple intercept',()=>{
  cy.url().should("include", "automationbro");
  cy.title().should("eq", "Parctice E-Commerce site - Automation Bro");
})

//Open cypress set ".only"

it('Clicks the get Started buttonand asserts the url', ()=>{
  cy.get("#get-started").click()

  cy.url().should("include", "#get-started")

})

it('verifies the text of the first menu link item', () =>{
  cy.get("H1.elementor-heading-title").should("have.text", "Think diferent. Make different")

})



})



