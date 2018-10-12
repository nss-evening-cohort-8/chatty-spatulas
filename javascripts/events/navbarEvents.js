import { clearMsg } from "../components/chattyMsg.js";
import { disableBtn } from "../helpers/util.js";

const clearMsgEvent = () => {
  const clearBtn = document.getElementById("clear-btn");
  const clearedMsgArray = document.getElementById("message-output");
  clearBtn.addEventListener("click", e => {
    if (e.target.id === "clear-btn" && clearedMsgArray !== "") {
      clearMsg();
      disableBtn(e, "clear-btn");
    }
  });
};

export { clearMsgEvent };