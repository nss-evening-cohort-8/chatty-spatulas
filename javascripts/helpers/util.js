import { getMessages } from "../components/chattyMsg.js";

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const msgInput = document.getElementById("message-input");
const navUserSelect = document.getElementById("user-selected");

// Generate unique ID for our messages
const getUniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

const getTime = () => {
  return moment().format("h:mm:ss a");
};

const inputValidation = (messageError, userError) => {
  if (messageError) {
    msgInput.classList.add("is-invalid");
    msgInput.setAttribute("placeholder", "Message field must not be empty");
  }
  if (userError) {
    navUserSelect.classList.replace("btn-success", "btn-danger");
  }
};

const resetMessageInput = () => {
  msgInput.value = "";
};

const resetButtonInput = () => {
  navUserSelect.selectedIndex = 0;
};

// pass in an event and the id of the button as a string
const disableBtn = (e, buttonId) => {
  const button = document.getElementById(buttonId);
  if (e.target.id === buttonId) {
    button.setAttribute("disabled", "disabled");
    button.classList.add("disabled");
  }
};

// pass id of button as a string
const enableBtn = buttonId => {
  document.getElementById(buttonId).removeAttribute("disabled");
  document.getElementById(buttonId).classList.remove("disabled");
};

const disableDropdown = () => {
  navUserSelect.setAttribute("disabled", "disabled");
  navUserSelect.classList.add("btn-outline-success");
};

const enableDropdown = () => {
  navUserSelect.removeAttribute("disabled");
  navUserSelect.classList.remove("btn-outline-success");
};

const getMessageObject = selectedMessage => {
  const messagesArray = getMessages();
  const messageId = messagesArray.findIndex(messages => messages.id === selectedMessage);
  return messageId;
};

const setScrolDown = divId => {
  document.getElementById(divId).scrollIntoView();
};

export {
  printToDom,
  getTime,
  getUniqueId,
  inputValidation,
  resetMessageInput,
  enableBtn,
  disableBtn,
  setScrolDown,
  getMessageObject,
  resetButtonInput,
  disableDropdown,
  enableDropdown
};
