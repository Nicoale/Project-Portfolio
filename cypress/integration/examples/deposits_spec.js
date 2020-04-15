describe ('Deposits Test',function(){
    it('Checks for any available deposit',function(){
        // expect(true).to.equal(true)
        cy.visit('localhost:9292/deposits')
        cy.contains('text').click()
        cy.type('1000')
          .should('have.value','1000')

    })
})