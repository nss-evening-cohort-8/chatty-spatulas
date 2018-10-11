const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const getTime = () => {
    moment().format("h:mm:ss a")
    
};



export {printToDom, getTime}