class SidebarPage {
  openMenu() {
    cy.get('#menu-toggle').click();
  }

  isSidebarActive() {
    cy.get('#sidebar-wrapper').should('exist').and('have.class', 'active');
  }

  clickHistory() {
    cy.contains('History').click();
  }

  validateNoAppointmentText() {
    cy.contains('No appointment').should('be.visible');
  }
}


export default SidebarPage;
