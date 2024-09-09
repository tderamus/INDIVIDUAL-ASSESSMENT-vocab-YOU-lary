import { deletWords, getSingleWord, getWords } from '../api/wordData';
import addWordForm from '../forms/addWordForm';
import { showWords } from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Place add word button to DOM
    if (e.target.id.includes('add-words-btn')) {
      console.warn('add word button clicked');
      addWordForm();
    }

    // EVENT FOR EDITING WORDS ON CARD
    if (e.target.id.includes('edit-btn')) {
      console.warn('EDIT BUTTON CLICKED');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj, user));
    }

    // EVENT FOR DELETING WORD CARD
    if (e.target.id.includes('delete-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deletWords(firebaseKey).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default domEvents;
