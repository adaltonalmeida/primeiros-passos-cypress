describe('Orange Hrm Test', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
      it('Login - fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name='username']").type('Admin')
        cy.get("[type='password']").type('admin')
        cy.get("[type='submit']").click()
        cy.get("[role='alert']")
        
      
  })
})