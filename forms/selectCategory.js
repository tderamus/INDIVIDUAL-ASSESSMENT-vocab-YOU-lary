import { getWords } from '../api/wordData';
import renderToDOM from '../utils/renderToDom';

const selectCategory = (catId) => {
  let domString = `<label for="category">Select A Word Category</label>
    <select class="form-control" id="category" required>
    <option value="">Select A Word Category</option>`;

  getWords().then((words) => {
    words.forEach((cat) => {
      domString += `
        <option value="${cat.category}"
        ${catId === cat.category ? 'selected' : ''}>
        ${cat.category}</option>`;
      console.warn(cat);
    });

    domString += '<select>';
    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
