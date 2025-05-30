import LoginPage from '../pages/LoginPage';
import SidebarPage from '../pages/SidebarPage';

describe('Appointment History Empty', () => {
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();

  it('should show no appointment in history', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    //demo user and password
    loginPage.fillUsername('John Doe');        
    loginPage.fillPassword('ThisIsNotAPassword'); 
    loginPage.clickLogin();

    sidebarPage.openMenu();
    sidebarPage.isSidebarActive();
    sidebarPage.clickHistory();
    sidebarPage.validateNoAppointmentText();
  });
});
