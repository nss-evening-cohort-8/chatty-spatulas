const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const getTime = () => {
  moment().format("h:mm:ss a");
};

const disableBtn = (e, buttonId) => {
  const button = document.getElementById(buttonId);
  if (e.target.id === buttonId) {
    button.setAttribute("disabled", "disabled");
    button.classList.add("disabled");
  }
};

const enableBtn = buttonId => {
  document.getElementById(buttonId).removeAttribute("disabled");
  document.getElementById(buttonId).classList.remove("disabled");
};

export { printToDom, getTime, disableBtn, enableBtn };
