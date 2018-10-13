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
  const increaseBtn = document.getElementById("large-text-size");
  const decreaseBtn = document.getElementById("default-text-size");
  increaseBtn.addEventListener("click", e => {
    document.getElementById("message-output").style.fontSize = "2rem";
  });
  decreaseBtn.addEventListener("click", e => {
    document.getElementById("message-output").style.fontSize = "1rem";
  });
};

const backgroundColor = () => {
  const defaultBackground = document.getElementById("default-background");
  const darkcyanBackground = document.getElementById("darkcyan-background");
  const chocolateBackground = document.getElementById("chocolate-background");
  defaultBackground.addEventListener("click", e => {
    document.getElementById("fullPage").style.backgroundColor = "#c8d6e5";
  });
  darkcyanBackground.addEventListener("click", e => {
    document.getElementById("fullPage").style.backgroundColor = "darkcyan";
  });
  chocolateBackground.addEventListener("click", e => {
    document.getElementById("fullPage").style.backgroundColor = "chocolate";
  });
};

const textColor = () => {
  const defaultTextColor = document.getElementById("default-textcolor");
  const goldenrodTextColor = document.getElementById("goldenrod-textcolor");
  const blueTextColor = document.getElementById("blue-textcolor");
  defaultTextColor.addEventListener("click", e => {
    document.getElementById("message-output").style.color = "black";
  });
  goldenrodTextColor.addEventListener("click", e => {
    document.getElementById("message-output").style.color = "goldenrod";
  });
  blueTextColor.addEventListener("click", e => {
    document.getElementById("message-output").style.color = "darkblue";
  });
};

export { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents, textSize, backgroundColor, textColor };
