import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user); // ADD DOM BUILD ELEMENTS
  navBar(); // ADD STANDARD NAV BAR TO THE DOM
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ADD EVENT LISTENERS FOR NAVIGATION BAR
  domEvents(user);
  formEvents(user);
  // Get words on DOM at application login

  getWords(user).then((words) => showWords(words));
};

export default startApp;
