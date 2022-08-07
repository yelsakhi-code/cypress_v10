import locators from "/cypress/locators/google.js";
import googleSearchData from '/cypress/fixtures/googleSearchData.json'

//#integer number= 1212321  #String = "hhfhfghf"  #boolean= true/false  boolean isgoogleagoodsite = true # array = ["", "",""] # object {"",""}
describe('google search', {baseUrl: 'https://www.google.com/'},  () => {
    beforeEach(() => {  
         //const searhcDataObject 
         cy.visit('/');
    })
    it('search for something', () => {
        let inputData = googleSearchData.searchInput5;
       /* cy.intercept('GET', '/complete/search*', (req) =>{*/

         // req.reply({
        /*  forceNetworkError: true
         // })
          }).as("completeSearch")*/
        //cy.wait(@completeSearch)
        cy.get(locators.searchBox).type(inputData+"{enter}")//.click()
        // make sure the new url conatins what we are searching for 
        if (inputData.includes(" ")){ 
          var URLSearchedData = inputData.split(' ').join('+');
        }else {
          var URLSearchedData = inputData; 
        }
        cy.url().should('include', `search?q=${URLSearchedData}`)
        // make sure that result bar exist
        cy.get(locators.resultBar).should('be.visible')
        // make sure that we can see 'all' in the result bar
        cy.get(locators.mainResult).contains('All').should('be.visible')
        // make sure that we can see images 
        cy.get(locators.nonMainResultLinks).contains('Images').should('be.visible')

      // search for something
     
      
      // make sure that we can see videos
      // make sure that we can see shopping 
    })
  })

  

  
  