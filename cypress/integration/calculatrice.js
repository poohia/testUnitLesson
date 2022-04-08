describe('Calculator test', () => {
    it('Make an addition', () => {
      cy.visit('http://localhost:3000/')

      cy.contains('1').click()
      cy.contains('+').click()
      cy.contains('2').click()
      cy.contains('=').click({force: true})
      cy.get('.result').should('contain', '3')
    })

    it('Make an substraction', () => {
        cy.visit('http://localhost:3000/')
  
        cy.contains('2').click()
        cy.contains('-').click()
        cy.contains('1').click()
        cy.contains('=').click({force: true})
        cy.get('.result').should('contain', '1')
      })

      it('Make a division', () => {
        cy.visit('http://localhost:3000/')
  
        cy.contains('6').click()
        cy.contains('/').click()
        cy.contains('3').click()
        cy.contains('=').click({force: true})
        cy.get('.result').should('contain', '2')
      })

      it('Make a modulo', () => {
        cy.visit('http://localhost:3000/')
  
        cy.contains('9').click()
        cy.contains('%').click()
        cy.contains('5').click()
        cy.contains('=').click({force: true})
        cy.get('.result').should('contain', '4')
      })

      it('Make a square', () => {
        cy.visit('http://localhost:3000/')
  
        cy.contains('√x').click()
        cy.contains('2').click()
        cy.contains('5').click()
        cy.contains('=').click({force: true})
        cy.get('.result').should('contain', '5')
      })

      it('Refresh', () => {
        cy.visit('http://localhost:3000/')
  
        cy.contains('√x').click()
        cy.contains('2').click()
        cy.contains('5').click()
        cy.contains('=').click({force: true})
        cy.contains('C').click()
        cy.get('.result').should('contain', '')
      })

      
  })
  