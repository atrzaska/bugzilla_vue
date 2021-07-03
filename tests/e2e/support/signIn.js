const USER = {
  email: 'admin1@bugzilla.com',
  password: 'admin1@bugzilla.com{enter}',
}

const signIn = (user = USER) => {
  cy.visit('/signin')
  cy.get('#email').type(user.email)
  cy.get('#password').type(user.password)
  cy.get('form').submit()
}

module.exports = signIn
