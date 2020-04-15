describe ('Deposits Test',function(){
    it('Checks for any available deposit',function(){
        // expect(true).to.equal(true)
<<<<<<< HEAD
        cy.visit('localhost:9292/deposits')
=======
        cy.visit('https://example.cypress.io')
>>>>>>> 5e276c9... tests for the newly added deposits page
        cy.contains('text').click()
        cy.type('1000')
          .should('have.value','1000')

    })
})