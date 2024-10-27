import userData from '../fixtures/user-data.json'

describe('Orange Hrm Test', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: " .orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }


  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
      it('Login - fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type(userData.userfail.username)
        cy.get(selectorList.passwordField).type(userData.userfail.password)
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
        
      
  })
})