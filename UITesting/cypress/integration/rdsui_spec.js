
describe('Bell Test', function() {
  it('Visits Google and searches for "rds"', function() {
    cy.visit('https://google.ca')
    cy.get('.lst-d-f')
      .type('rds')
      .type('{enter}')
    cy.get('a')
  })

  it('goes to RDS and verifies the presence of the image on the upper left', function () {
  	cy.visit('https://www.rds.ca')
    var img = cy.get('.icon-rds.md.logo')
    expect(img).to.exist
  })
})