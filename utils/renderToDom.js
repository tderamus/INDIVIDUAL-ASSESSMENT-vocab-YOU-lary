const renderToDom = (divId, htmlString) => {
  const targetDiv = document.querySelector(divId);
  targetDiv.innerHTML = htmlString;
};

export default renderToDom;
