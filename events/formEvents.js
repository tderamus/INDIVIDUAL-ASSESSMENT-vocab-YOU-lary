import { getWords, createWord, updateWord } from '../api/wordData';
import { showWords } from '../pages/words';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    // submit form to add words to firebase database
    e.preventDefault();
    if (e.target.id.includes('submit-words')) {
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid,
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(uid).then(showWords);
        });
      });
    }
  });
};

export default formEvents;
