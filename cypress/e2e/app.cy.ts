import { BOARDING_COOKIE_KEY } from '../../src/lib/constants';

describe('Navigation', () => {
  beforeEach(() => {
    cy.clearCookies();
  })

  it(`Should navigate based on first_time cookie`, () => {
    cy.visit('/')
    cy.getCookie(BOARDING_COOKIE_KEY).then(firstTime => {
      if (firstTime) cy.url().should('include', '/');
      else cy.url().should('include', '/onboarding');
    })

    cy.get('#skip-btn').click().then(() => {
      cy.setCookie(BOARDING_COOKIE_KEY, 'false')
    })
    cy.getCookie(BOARDING_COOKIE_KEY).should('exist')

    cy.get('#lang-trigger')
      .click()
      .get('#lang-select div  div:nth-child(3)')
      .click()

    cy.url().should('include', 'en')
  })
})

