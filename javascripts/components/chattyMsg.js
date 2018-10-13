import { editBtnEvent } from "../events/userMsgEvents.js";
import { printToDom, getUniqueId, getTime, inputValidation, resetMessageInput, getMessageObject } from "../helpers/util.js";

let messagesArray = [];

let editMode = { isInEdit: false, id: 0};

const setMessages = newArray => {
  messagesArray = newArray;
};

const getMessages = () => {
  return messagesArray;
};

const messagesBuilder = messagesArray => {
  let domString = "";
  messagesArray.forEach(message => {
    domString += `<div class="msg-row row m-1">`;
    domString += `<div class="col-md-1">`;
    domString += `<p class="message-text">${message.timeStamp}</p>`;
    domString += `</div>`;
    domString += `<div class="col-md-2">`;
    domString += `<p class="message-text"><strong>${message.username}</strong></p>`;
    domString += `</div>`;
    domString += `<div class="col-md-8">`;
    domString += `<p>${message.msg}</p>`;
    domString += `</div>`;
    domString += `<div class="col-md-1 justify-content-end row align-items-center">`;
    domString += `<button type="button" class="edit-btn msg-btn btn btn-success btn-sm mx-1" value="${message.id}">`;
    domString += `<i class="far fa-edit"></i>`;
    domString += `</button>`;
    domString += `<button type="button" class="msg-btn btn btn-danger btn-sm mx-1" value="${message.id}">`;
    domString += `<i class="far fa-trash-alt" ></i ></button >`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `<hr>`;
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

const enterKeyMsgEvent = (user, message ) => {
  let userMsgError = message === "" ? true : false;
  let selectedUserError = user === "Select User" ? true : false;
  if (editMode.isInEdit === true) {
      getUpdatedMsg(editMode.id, message);
      editMode.isInEdit === false;

      return;
  }else if(userMsgError === true || selectedUserError === true) {
    inputValidation(userMsgError, selectedUserError);
    return;
  }
  let currentMsgArray = getMessages();
  let newMsgObject = {};
  newMsgObject.id = getUniqueId();
  newMsgObject.username = user;
  newMsgObject.msg = message;
  newMsgObject.timeStamp = getTime();
  currentMsgArray.push(newMsgObject);
  messagesBuilder(currentMsgArray);
  resetMessageInput();
};

const getEdittedMsg = e => {
    const msgInput = document.getElementById("message-input");
    const btnId = e.target.closest(".edit-btn").value;
    const msgIndex = getMessageObject(btnId);
    editMode.isInEdit = true;
    editMode.id = msgIndex;
    msgInput.value = messagesArray[msgIndex].msg;
  };

const getUpdatedMsg = (msgIndex, edittedMsg) => {
    messagesArray[msgIndex].msg = edittedMsg;
    messagesBuilder(messagesArray);
}

export { setMessages, getMessages, messagesBuilder, enterKeyMsgEvent, clearMsg, getEdittedMsg };
