import signIn from '../support/signIn'

const i18n = {
  projects: 'Projects',
  actions: 'Actions',
  name: 'Name',
  myProject: 'My Project',
}

describe('Projects List', () => {
  it('Shows all the information', () => {
    signIn()
    cy.visit('/projects')
    cy.contains(i18n.projects)
    cy.contains(i18n.actions)
    cy.contains(i18n.name)
    cy.contains(i18n.myProject)
  })
})
