describe ('Deposits Test',function(){
    it('Checks for any available deposit',function(){
        // expect(true).to.equal(true)
        cy.visit('https://example.cypress.io')
        cy.contains('text').click()
        cy.type('1000')
          .should('have.value','1000')

    })
})