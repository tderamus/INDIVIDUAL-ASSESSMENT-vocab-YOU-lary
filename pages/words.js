import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noWordsOnDom = () => {
  const htmlString = '<h1>There are no words to display</h1>';
  renderToDom('#store-container', htmlString);
};

const showWords = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-words-btn">Add VocabYOUlary Word</button>';
  renderToDom('#main-container', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 id="word" class="card-title">${item.word}</h5>
        <p id="definition" class="card-text">${item.definition}.</p>
        <p id="category" class="card-text">${item.category}.</p>
        <p class="card-text bold">${item.network ? '<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span>' : ''}</p>
        <hr>
        <a id="edit-btn--${item.firebaseKey}" href="#" class="btn btn-primary">Edit</a>
        <a id="delete-btn--${item.firebaseKey}" href="#" class="btn btn-primary">Delete</a>
        </div>
      </div>
    `;
    renderToDom('#store-container', domString);
  });
};

export { noWordsOnDom, showWords };
