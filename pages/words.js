import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noWordsOnDom = () => {
  const htmlString = '<h1>There are no words to display</h1>';
  renderToDom('#store-container', htmlString);
};

const showWords = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-words-btn">Add VocabYOUlary Word</button>';
  renderToDom('#add-button', btnString);
};

export { noWordsOnDom, showWords };
