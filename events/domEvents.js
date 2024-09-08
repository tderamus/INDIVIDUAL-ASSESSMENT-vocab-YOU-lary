import addWordForm from '../forms/addWordForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Place add word button to DOM
    if (e.target.id.includes('add-words-btn')) {
      console.warn('add word button clicked');
      addWordForm();
    }
  });
};

export default domEvents;
