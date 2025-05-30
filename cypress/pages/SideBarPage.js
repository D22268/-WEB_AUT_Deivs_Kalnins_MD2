class SidebarPage {
  openMenu() {
    cy.get('#menu-toggle').click(); // burger/menu icon button
  }

  isSidebarActive() {
    cy.get('#sidebar').should('have.class', 'active');
  }

  clickHistory() {
    cy.contains('History').click();
  }

  validateNoAppointmentText() {
    cy.contains('No appointment').should('be.visible');
  }
}

export default SidebarPage;
