
//< reference types="Cypress"/>

describe('intercept with cypress exemple',{baseUrl: 'https://jsonplaceholder.typicode.com/'},()=>{

//Open Cypress set ".only"
beforeEach(() => {
    cy.visit('/')
  })
it('Test api with simple intercept',()=>{

cy.visit('https://jsonplaceholder.typicode.com/')
cy.intercept({
    path : '/posts'
}).as('posts')
cy.get("table:nth-of-type(1) a[href='/posts']").click()   
cy.wait('@posts').then(inter =>{
    cy.log(json.stringify(inter))  
    console.log(json.stringify(inter))
    expect(inter.response.body).to.have.length(100)

})


})

//Open cypress set ".only"

it('mocking with intercept  with a static resopnse', ()=>{
    cy.visit('https://jsonplaceholder.typicode.com/')
     cy.intercept('GET','/posts', {totalpost:5 , name:'naveen'}).as('posts')
     cy.get("table:nth-of-type(1) a[href='/posts']").click()
     cy.wait('@posts')

})





})