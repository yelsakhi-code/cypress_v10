
describe('Home Tests', () => {​​​​​​ 
  //beforeEach(() => {​​​​​​      
      // cy.visit('https://practice.automationbro.com/'); 
   it("Open The home page and verify the url and the title", () => {​​​​​​ 
          //cy.visit('/');

        cy.visit('https://practice.automationbro.com/');  


        cy.url().should("include", "automationbro"); 


        cy.title().should("eq", "Parctice E-Commerce site - Automation Bro")    
 }​​​​​​); 

 it(' Clicks the get Started buttonand asserts the url', () =>{

    cy.get("#get-started").click();

    cy.url().should("include", "#get-started");

 });
///
  it(' Get the text of the heading and assert the value', () =>{ 

      cy.get("H1.elementor-heading-title").should("have.text", "Think diferent. Make different")

  });

  it('verifies the text of the first menu link item', () =>{

    cy.get("#primary-menu").find("li").first().should("have.text", "home");

  
  }​​​​​​)
}​​​​​​)


