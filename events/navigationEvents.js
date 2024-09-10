import { getWords, networkWords } from '../api/wordData';
import { showWords } from '../pages/words';
import { signOut } from '../utils/auth';

// navigation bar events

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    console.warn('ALL WORDS BUTTON CLICKED', user.uid);
    getWords(user.uid).then(showWords);
  });

  // ALL NETWORK WORDS
  document.querySelector('#network-words').addEventListener('click', () => {
    console.warn('NETWORK WORDS BUTTON CLICKED', user.uid);
    networkWords(user.uid).then(showWords);
  });
};

export default navigationEvents;
