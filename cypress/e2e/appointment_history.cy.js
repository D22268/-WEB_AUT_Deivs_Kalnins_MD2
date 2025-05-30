import LoginPage from '../pages/LoginPage';
import SidebarPage from '../pages/SidebarPage';

describe('Appointment History Empty', () => {
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();

  it('should show no appointment in history', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.fillUsername('John Doe');         // Use the demo username
    loginPage.fillPassword('ThisIsNotAPassword'); // Use the demo password
    loginPage.clickLogin();

    sidebarPage.openMenu();
    sidebarPage.isSidebarActive();
    sidebarPage.clickHistory();
    sidebarPage.validateNoAppointmentText();
  });
});
