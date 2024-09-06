const renderToDom = (divId, content) => {
  const targetDiv = document.querySelector(divId);
  targetDiv.innerhtml = content;
};

export default renderToDom;
