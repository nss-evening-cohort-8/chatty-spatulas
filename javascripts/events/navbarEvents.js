import { enterKeyMsgEvent, clearMsg, disableClearBtn } from "../components/chattyMsg.js";

const navbarEnterEvents = () => {
  const navTextInput = document.getElementById("message-input");
  const navUserSelect = document.getElementById("user-selected");
  navTextInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
    } else if (navTextInput.classList.contains("is-invalid")) {
      navTextInput.classList.remove("is-invalid");
    }
  });
};

const navBarUserSelectEvents = () => {
  const navTextInput = document.getElementById("message-input");
  const navUserSelect = document.getElementById("user-selected");
  navUserSelect.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
    } else if (navBarUserSelectEvents.classList.contains("btn-danger")) {
      navBarUserSelectEvents.classList.replace("btn-danger", "btn-success");
    }
  });
  navUserSelect.addEventListener("change", e => {
    if (navUserSelect.value !== "Select User" && navUserSelect.classList.contains("btn-danger")) {
      navUserSelect.classList.replace("btn-danger", "btn-success");
    }
  });
};

const clearMsgEvent = () => {
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", e => {
    clearMsg();
    disableClearBtn(e);
  });
};

export { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents };
