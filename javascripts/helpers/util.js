console.log('util');

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

// Generate unique ID for our messages
const getUniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

export { printToDom, getUniqueId };
