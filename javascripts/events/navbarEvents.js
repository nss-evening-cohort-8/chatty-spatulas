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
    disableBtn(e, "clear-btn");
  });
};

const textSize = () => {
  const largeText = document.getElementById("large-text");
  largeText.addEventListener("change", e => {
    if (largeText.checked) {
      document.getElementById("message-output").style.fontSize = "2rem";
    } else {
      document.getElementById("message-output").style.fonSize = "1rem";
    }
  });
};

const themeColor = () => {
  const background = document.getElementById("backgrnd-color");
  background.addEventListener("change", e => {
    const newColor = document.getElementById("backgrnd-color").value;
    document.body.style.backgroundColor = newColor;
  });
};

const textColor = () => {
  const msgColor = document.getElementById("text-color");
  msgColor.addEventListener("change", e => {
    const newColor = document.getElementById("text-color").value;
    document.body.style.color = newColor;
  });
};

export { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents, textSize, themeColor, textColor };
