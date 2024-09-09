import { getWords, createWord, updateWord } from '../api/wordData';
import { showWords } from '../pages/words';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    // CLICK ENVENT FOR SUBMITTING FOR TO ADD WORDS TO DATABASE
    e.preventDefault();
    if (e.target.id.includes('submit-words')) {
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid: user.uid,
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }

    // CLICK EVENT FOR UPDATING WORDS IN THE DATABASE

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
