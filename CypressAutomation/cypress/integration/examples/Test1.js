///  <reference types="Cypress" />

describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    //parent child chaining ---
    cy.get('.products').find('.product').should('have.length', 4)

    //Add to cart //eq is the array index 

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    
    


})
})