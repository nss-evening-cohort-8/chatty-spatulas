import { editBtnEvent, delBtnEvent } from "../events/userMsgEvents.js";
import {
  printToDom,
  getUniqueId,
  getTime,
  inputValidation,
  resetMessageInput,
  getMessageObject,
  disableDropdown,
  resetButtonInput,
  enableDropdown,
  setScrolDown
} from "../helpers/util.js";

let messagesArray = [];

let editMode = { isInEdit: false, id: 0 };

const setMessages = newArray => {
  messagesArray = newArray;
};

const getMessages = () => {
  return messagesArray;
};

const messagesBuilder = messagesArray => {
  let domString = "";
  if (messagesArray.length > 20) {
    messagesArray.shift(messagesArray.length - 20, messagesArray.length);
  }
  messagesArray.forEach(message => {
    domString += `<div class="msg-row row m-1" id="${message.id}">`;
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
    domString += `<button type="button" class="del-btn msg-btn btn btn-danger btn-sm mx-1" value="${message.id}">`;
    domString += `<i class="far fa-trash-alt" ></i ></button >`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `<hr>`;
  });
  printToDom(domString, "message-output");
  editBtnEvent();
  delBtnEvent();
};

const clearMsg = () => {
  const clearedMsgArray = document.getElementById("message-output");
  clearedMsgArray.innerHTML = "";
  messagesArray = [];
  setMessages(messagesArray);
};

const enterKeyMsgEvent = (user, message) => {
  let userMsgError = message === "" ? true : false;
  let selectedUserError = user === "Select User" ? true : false;
  if (editMode.isInEdit === true) {
    getUpdatedMsg(editMode.id, message);
    editMode.isInEdit = false;
    resetMessageInput();
    resetButtonInput();
    enableDropdown();
    return;
  } else if (userMsgError === true || selectedUserError === true) {
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
  setScrolDown(newMsgObject.id);
  resetMessageInput();
  resetButtonInput();
};

const getEdittedMsg = e => {
  const msgInput = document.getElementById("message-input");
  const userSelect = document.getElementById("user-selected");
  const btnId = e.target.closest(".edit-btn").value;
  const msgIndex = getMessageObject(btnId);
  editMode.isInEdit = true;
  editMode.id = msgIndex;
  msgInput.focus();
  msgInput.value = messagesArray[msgIndex].msg;
  userSelect.value = messagesArray[msgIndex].username;
  disableDropdown();
};

const getUpdatedMsg = (msgIndex, edittedMsg) => {
  messagesArray[msgIndex].msg = edittedMsg;
  messagesBuilder(messagesArray);
};

const delMsg = e => {
  const btnId = e.target.closest(".del-btn").value;
  const msgIndex = getMessageObject(btnId);
  messagesArray.splice(msgIndex, 1);
  messagesBuilder(messagesArray);
  emojify.setConfig({img_dir: '../../jemoji/emojis'});
  emojify.run(document.getElementById("message-output"));
};

export { setMessages, getMessages, messagesBuilder, enterKeyMsgEvent, clearMsg, getEdittedMsg, editMode, delMsg };
