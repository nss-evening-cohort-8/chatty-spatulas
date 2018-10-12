import { enterKeyMsgEvent, clearMsg, disableClearBtn } from "../components/chattyMsg.js";

const navTextInput = document.getElementById("message-input");
const navUserSelect = document.getElementById("users");

const navbarEnterEvents = () => {
  navTextInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
    } else if (navTextInput.classList.contains("is-invalid")) {
      navTextInput.classList.remove("is-invalid");
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

export { navbarEnterEvents, clearMsgEvent };
