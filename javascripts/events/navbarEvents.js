import { clearMsg, disableClearBtn } from "../components/chattyMsg.js";

const clearMsgEvent = () => {
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", e => {
    clearMsg();
    disableClearBtn(e);
  });
};

export { clearMsgEvent };