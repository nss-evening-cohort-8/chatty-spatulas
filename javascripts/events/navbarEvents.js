import { enterKeyMsgEvent, clearMsg } from "../components/chattyMsg.js";
import { disableBtn, enableBtn } from "../helpers/util.js";

const navbarEnterEvents = () => {
  const navTextInput = document.getElementById("message-input");
  const navUserSelect = document.getElementById("user-selected");
  const clearBtn = document.getElementById("clear-btn");
  navTextInput.addEventListener("keyup", e => {
    if (e.key === "Enter" && clearBtn.classList.contains("disabled")) {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
      enableBtn("clear-btn");
    } else if (e.key === "Enter") {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
    } else if (navTextInput.classList.contains("is-invalid")) {
      navTextInput.classList.remove("is-invalid");
      navTextInput.setAttribute("placeholder", "Enter your message");
    }
  });
};

const navBarUserSelectEvents = () => {
  const navTextInput = document.getElementById("message-input");
  const navUserSelect = document.getElementById("user-selected");
  navUserSelect.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      enterKeyMsgEvent(navUserSelect.value, navTextInput.value);
    } else if (navUserSelect.classList.contains("btn-danger")) {
      navUserSelect.classList.replace("btn-danger", "btn-success");
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
    disableBtn(e, "clear-btn");
  });
};

export { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents };
