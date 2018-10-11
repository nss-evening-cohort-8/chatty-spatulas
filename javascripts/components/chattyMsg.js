import { printToDom } from "../helpers/util.js";
import { editBtnEvent } from "../events/userMsgEvents.js";

let messagesArray = [];

const setMessages = newArray => {
  messagesArray = newArray;
};

const showMessages = () => {
  return messagesArray;
};

const messagesBuilder = messagesArray => {
  let domString = "";
  messagesArray.forEach(message => {
    domString += `<div class="messageId">`;
    domString += `<h5>${message.timeStamp}<strong>${
      message.username
    }</strong></h5>`;
    domString += `<p>${message.msg}</p>`;
    domString += `<button type="button" class="btn btn-primary edit-btn" value="edit">Edit</button>`;
    domString += `<button type="button" class="btn btn-primary" value="delete">Delete</button>`;
    domString += `</div>`;
  });
  printToDom(domString, "message-output");
  editBtnEvent();
};

const clearMsg = () => {
  const clearedMsgArray = document.getElementById("message-output");
  clearedMsgArray.innerHTML = "";
  messagesArray = [];
  setMessages(messagesArray);
};

const disableClearBtn = e => {
  const clearedMsgArray = document.getElementById("message-output");
  const clearBtn = document.getElementById("clear-btn");
  if (e.target.id === "clear-btn" && clearedMsgArray.innerHTML === "") {
    clearBtn.setAttribute("disabled", "disabled");
    clearBtn.classList.add("disabled");
    console.log("disabled");
  } else {
    clearBtn.removeAttribute("disabled");
    clearBtn.classList.remove("disabled");
  }
};

export {
  setMessages,
  showMessages,
  messagesBuilder,
  clearMsg,
  disableClearBtn
};
