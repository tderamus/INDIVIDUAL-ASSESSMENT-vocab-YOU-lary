import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="mb-3">
    <input type="text" class="form-control" id="word" placeholder="add word"></div>
    <div class="mb-3">
    <textarea class="form-control" id="definition" rows="3" placeholder="add definition"></textarea>
    </div>
    <div class="mb-3">
    <input type="text" class="form-control" id="category" placeholder="add categoryy"></div>
    <button type="submit" class="btn btn-primary mt-3" id="submit-words">Submit Word</button>
  </form>`;

  renderToDOM('#main-container', domString);
};

export default addWordForm;
