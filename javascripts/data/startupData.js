function getData () {
    const data = JSON.parse(this.responseText);
}

function ifDataFails () {
    console.log('Xhr failed');

}




const getMessages = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', getData);
    myRequest.addEventListener('error', executeThisCodeifXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getMessages};