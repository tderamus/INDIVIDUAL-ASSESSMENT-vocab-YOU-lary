import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectCategory from './selectCategory';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-words'}" class="mb-4">
    <div class="mb-3">
    <input type="text" class="form-control" id="word" placeholder="add word" value="${obj.word || ''}" required></div>
    <div class="mb-3">
    <input type="text" class="form-control" id="definition" rows="3" placeholder="add definition" value="${obj.definition || ''}"></input>
    </div>
    <div class="form-check">
    <div class="form-group" id="select-category">Here</div>
    </div>
    <input type="checkbox" id="network" class="form-check-input" ${obj.network ? 'checked' : ''}>Network Type
    </div>
    <button type="submit" class="btn btn-primary mt-3" id="submit-words">Submit Word</button>
  </form>`;

  renderToDOM('#main-container', domString);
  selectCategory(`${obj.category || ''}`);
};

export default addWordForm;
