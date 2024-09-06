import getWords from '../api/wordData';
import { showWords } from '../pages/words';
import { signOut } from '../utils/auth';

// navigation bar events

const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    console.warn('ALL WORDS BUTTON CLICKED', uid);
    getWords(uid).then(showWords);
  });
};

export default navigationEvents;
