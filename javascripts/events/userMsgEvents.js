import { getEdittedMsg, delMsg } from "../components/chattyMsg.js";
import {enableBtn} from "../helpers/util.js";

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
        if (document.getElementById("message-output").innerHTML === "") {
          document.getElementById("clear-btn").setAttribute("disabled", "disabled");
          document.getElementById("clear-btn").classList.add("disabled");
        } else {
          enableBtn("clear-btn");
        }
      })
  }
};

export { editBtnEvent, delBtnEvent };
