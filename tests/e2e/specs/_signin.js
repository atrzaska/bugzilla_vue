import signIn from '../support/signIn'

const INVALID_USER = { email: 'qwe@qwe.com', password: 'qwe@qwe.com' }
const i18n = {
  signin: 'Sign in',
  signup: 'Sign up',
  rememberMe: 'Remember me',
  forgotPassword: 'Forgot password?',
  noConfirmation: "Didn't get confirmation email?",
  dashboard: 'Dashboard',
  invalid: 'Invalid e-mail or password',
}

describe('Signin page', () => {
  it('Shows all the information', () => {
    cy.visit('/signin')
    cy.contains(i18n.signin)
    cy.contains(i18n.signup)
    cy.contains(i18n.rememberMe)
    cy.contains(i18n.forgotPassword)
    cy.contains(i18n.noConfirmation)
  })

  it('Invalid user cannot log in', () => {
    signIn(INVALID_USER)
    cy.contains(i18n.invalid)
  })

  it('Valid user can log in', () => {
    signIn()
    cy.url().should('include', '/dashboard')
    cy.contains(i18n.dashboard)
  })
})
