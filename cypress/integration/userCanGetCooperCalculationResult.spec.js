describe('Cooper Client calculates successfully', () => {
  before(() => {
    cy.visit('http://localhost:3001');
    cy.get('input[id="distance"]').type('1000')
    cy.get('select[id="gender"]').select('female')
    cy.get('input[id="age"]').type('23')
  })

  it('displays age', () => {
    cy.contains('23 y/o')
  })

  it('displays gender', () => {
    cy.contains('female')
  })

  it('displays distance', () => {
    cy.contains('running 1000 meters')
  })

  it('displays result', () => {
    cy.contains('Result: Poor')
  })
})

// describe('BMI Converter', () => {
//   before(function() {
//       cy.visit('http://localhost:3000');
//   })

//   beforeEach(function() {
//       // Reload the application between tests to reset state
//       cy.reload();
//   })
// })