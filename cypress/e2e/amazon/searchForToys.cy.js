

import locators from "/cypress/locators/amazon.js";
import testData from '/cypress/fixtures/testData.json'

describe('Amazon Search', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('searching for toys', () => {
    var dir = process.cwd()
    console.log("dir "+ dir)
    // step 1: user can type toys
    cy.get(locators.searchBox).type(testData.product1)
    // step 2: user can click search button
    cy.get(locators.searchButton).click();
    // step3: validate that the user can see the result 
    cy.get('span').contains('RESULTS').should('be.visible')
    /*
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')*/
  })
})
