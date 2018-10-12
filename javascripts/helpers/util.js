const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const msgInput = document.getElementById("message-input");

// Generate unique ID for our messages
const getUniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

const getTime = () => {
  return moment().format("h:mm:ss a");
};

const inputValidation = () => {
  msgInput.classList.add("is-invalid");
  msgInput.setAttribute("placeholder", "Message field must not be empty");
};

const resetMessageInput = () => {
  msgInput.value = "";
};

export { printToDom, getTime, getUniqueId, inputValidation, resetMessageInput };
