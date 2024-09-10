import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-words'}" class="mb-4">
    <div class="mb-3">
    <input type="text" class="form-control" id="word" placeholder="add word" value="${obj.word || ''}" required></div>
    <div class="mb-3">
    <input type="text" class="form-control" id="definition" rows="3" placeholder="add definition" value="${obj.definition || ''}"></input>
    </div>
    <div class="mb-3">
    <input type="text" class="form-control" id="category" placeholder="add category" value="${obj.category || ''}"></div>
    <div class="form-check">
    <div class="form-group" id="select-category"></div>
    </div><input type="checkbox" id="network" class="form-check-input" ${obj.network ? 'checked' : ''}>
    </div>
    <button type="submit" class="btn btn-primary mt-3" id="submit-words">Submit Word</button>
  </form>`;

  renderToDOM('#main-container', domString);
};

export default addWordForm;
