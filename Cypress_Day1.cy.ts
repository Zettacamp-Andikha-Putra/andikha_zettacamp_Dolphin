let username = "andikha";

describe('My First Test', () => {
  it('User should able to login', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(500)

    cy.get('[data-cy="input-name"]')
    .type(username)
    cy.wait(500)

    cy.get('[data-cy="input-password"]')
    .type(12345)
    cy.wait(500)

    cy.get('[data-cy="btn-login"]')
    .click()
    cy.wait(500)
    
    cy.get('[data-cy="text-navbar-profile-name"]')
    .contains(`Hi, ${username}`)

    // cy.get('[data-cy="btn-add-menu-item-to-cart"]').each((item, index) => {
    //     cy.get(item).click()
    //     cy.wait(1000)
    // })

    for(let i=0; i<4; i++){
      cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
    }

    for(let i=0; i<2; i++){
      cy.get(':nth-child(2) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
      cy.get(':nth-child(3) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
      cy.get(':nth-child(4) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
    }
    
    cy.get('[data-cy="btn-checkout"]')
    .click()
    cy.wait(500)

    cy.get('[data-cy="btn-logout"]')
    .click()
    cy.wait(500)
  })
})