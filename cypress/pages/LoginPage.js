class LoginPage {
  visit() {
    cy.visit('/');
  }

  clickMakeAppointment() {
    cy.contains('Make Appointment').click();
  }

  fillUsername(username) {
    cy.get('#txt-username').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#txt-password').clear().type(password);
  }

  clickLogin() {
    cy.get('#btn-login').click();
  }
}

export default LoginPage;
