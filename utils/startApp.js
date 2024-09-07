import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import getWords from '../api/wordData';
import { showWords } from '../pages/words';

const startApp = (user) => {
  domBuilder(user.uid); // ADD DOM BUILD ELEMENTS
  navBar(); // ADD STANDARD NAV BAR TO THE DOM
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  navigationEvents(user.uid); // ADD EVENT LISTENERS FOR NAVIGATION BAR
  // Get words on DOM at application login

  getWords(user).then((words) => showWords(words));
};

export default startApp;
