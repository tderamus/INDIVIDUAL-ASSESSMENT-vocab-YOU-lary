import firebase from 'firebase';
import { getWords, networkWords } from '../api/wordData';
import { showWords } from '../pages/words';
import { signOut } from '../utils/auth';

// navigation bar events

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    console.warn('ALL WORDS BUTTON CLICKED');
    getWords(`${firebase.auth().currentUser.uid}`).then(showWords);
  });

  // ALL NETWORK WORDS
  document.querySelector('#network-words').addEventListener('click', () => {
    console.warn('NETWORK WORDS BUTTON CLICKED');
    networkWords(`${firebase.auth().currentUser.uid}`).then(showWords);
  });
};

export default navigationEvents;
