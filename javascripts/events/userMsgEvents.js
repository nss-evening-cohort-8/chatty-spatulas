import { getEdittedMsg, delMsg } from "../components/chattyMsg.js";

const editBtnEvent = () => {
  const editButtons = document.getElementsByClassName("edit-btn");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", e => {
      getEdittedMsg(e);
    });
  }
};

const delBtnEvent = () => {
  const delButtons = document.getElementsByClassName("del-btn");
  for (let i = 0; i < delButtons.length; i++) {
    delButtons[i].addEventListener("click", e => {
      delMsg(e);
    });
  }
};

export { editBtnEvent, delBtnEvent };
