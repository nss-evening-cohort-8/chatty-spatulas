const editBtnEvent = () => {
    const editButtons = document.getElementsByClassName('edit-btn')
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', editMessage);
    }
}

const editMessage = (e) => {
    const msgInput = document.getElementById('message-input');
    const userDropdown = document.getElementById('users');
    msgInput.value = e.target.previousSibling.innerHTML;    
    userDropdown.setAttribute("disabled", "disabled");
    userDropdown.classList.add("disabled");
}

export {editBtnEvent}