let messagesArray = []; 

const setMessages = (newArray) => {
    messagesArray = newArray;
    console.log("bpop", messagesArray);
};

const showMessages = () => {
    return messagesArray;
};

const messagesBuilder = (messagesArray) => {
    let domString = '';
    messagesArray.forEach((message) => {
            domString += `<div class="messageId">`;
            domString +=    `<h5>12:00:00<strong>${message.username}</strong></h5>`;        
            domString +=    `<p>${message.msg}</p>`;
            domString +=    `<button> type="button" value="delete">`;
            domString +=    `<button> type="button" value="delete">`;
            domString += `</div>`; 
            
        });
        console.log(domString);
}


export {setMessages, showMessages, messagesBuilder}