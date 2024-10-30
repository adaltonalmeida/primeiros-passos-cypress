import userData from '../fixtures/user-data.json'

describe('Orange Hrm Test', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: " .orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    FirstnameField:"[name='firstName']",
    LastnameField:"[name='lastName']",
    genaricField:".oxd-input--active",
    dateField: "['placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }


  it.only('User Info Update- Success', () => {
       cy.visit('/auth/login')
       cy.get(selectorList.usernameField).type(userData.userSuccess.username)
       cy.get(selectorList.passwordField).type(userData.userSuccess.password)
       cy.get(selectorList.loginButton).click()
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(selectorList.dashboardGrid)
        cy.get(selectorList.myInfoButton).click()
        cy.get(selectorList.FirstnameField).clear().type('FirstNameTeste')
        cy.get(selectorList.LastnameField).clear().type('LastNameTeste')
        cy.get(selectorList.genaricField).eq(3).clear().type('nicknameTest')
        cy.get(selectorList.genaricField).eq(4).clear().type('Employee')
        cy.get(selectorList.genaricField).eq(5).clear().type('OtherIdTest')
        cy.get(selectorList.genaricField).eq(6).clear().type('driversLicenseTest')
        cy.get(selectorList.genaricField).eq(7).clear().type('2025-03-10')
        cy.get(selectorList.dateCloseButton).eq(0).click()
        cy.get(selectorList.genaricField).eq(8).clear().type('ssnumberTest')
        cy.get(selectorList.genaricField).eq(9).clear().type('sinnumberTest')
        cy.get(selectorlist.submitButton).eq(0).click()
        cy.get('body'),should('contain','successfully Updated')
        cy.get('.oxd-toast-close')
      })
      it('Login - fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorList.usernameField).type(userData.userfail.username)
        cy.get(selectorList.passwordField).type(userData.userfail.password)
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
        
        
        
      
  })
})