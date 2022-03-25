const createCheckBoxElement = (contentText = "") => {
  const viewEditBlock = document.createElement("label");
  viewEditBlock.classList.add("movie-edit");
  // viewEditBlock.classList.add("movie-option");
  const editBlock = document.createElement("input");
  editBlock.type = "checkbox";
  editBlock.classList.add("movie-edit__input");
  const stateBlock = document.createElement("span");
  stateBlock.classList.add("movie-edit__box");
  //editBlock.checked = true;
  viewEditBlock.innerHTML = contentText;
  viewEditBlock.append(editBlock);
  viewEditBlock.append(stateBlock);
  return { editBlock, viewEditBlock };
};

export { createCheckBoxElement };
