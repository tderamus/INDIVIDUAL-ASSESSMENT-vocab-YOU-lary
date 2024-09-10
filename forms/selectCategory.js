import { getWords } from '../api/wordData';
import renderToDOM from '../utils/renderToDom';

const selectCategory = (category) => {
  let domString = `<label for="category">Select A Word Category</label>
    <select class="form-control" id="category" required>
    <option value="">Select A Word Category</option>`;

  getWords().then((catArray) => {
    catArray.array.forEach((cat) => {
      domString += `
        <optiion value="${cat.firebaseKey}"
        ${category === cat.firebaseKey ? 'selected' : ''}>
        ${cat.category}</option>`;
    });

    domString += '<select>';
    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
