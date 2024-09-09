import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const htmlString = `
  <div id="nav-bar"></div>
  <div id="main-container"></div>
  <div id="word-button"></div>
  <div id="store-container"></div>
  <div id="view-container"></div>
  `;
  renderToDom('#app', htmlString);
};

export default domBuilder;
