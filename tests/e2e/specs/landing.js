const i18n = {
  hero: 'Bugzilla, simple and effective project management for your team',
  subtext:
    'Collaborate with your remote team to improve what you do, guided by a simple workflow. And for free!',
  cta: 'Get started',
  see: 'See how it works',
  login: 'Log in',
  signup: 'Sign up free →',
}

describe('Landing page', () => {
  it('Shows all the information', () => {
    cy.visit('/')
    cy.contains(i18n.hero)
    cy.contains(i18n.subtext)
    cy.contains(i18n.cta)
    cy.contains(i18n.see)
    cy.contains(i18n.login)
    cy.contains(i18n.signup)
  })
})
