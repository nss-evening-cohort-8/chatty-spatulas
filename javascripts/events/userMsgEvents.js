import { getEdittedMsg } from "../components/chattyMsg.js";

const editBtnEvent = () => {
  const editButtons = document.getElementsByClassName("edit-btn");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", e => {
      getEdittedMsg(e);
    });
  }
};

export { editBtnEvent };