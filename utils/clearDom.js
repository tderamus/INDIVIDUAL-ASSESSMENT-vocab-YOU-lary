const clearDom = () => {
  document.querySelector('#store-container').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#view-container').innerHTML = '';
  document.querySelector('#word-button').innerHTML = '';
};

export default clearDom;
