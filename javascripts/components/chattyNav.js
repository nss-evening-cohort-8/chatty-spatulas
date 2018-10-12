import { printToDom } from "../helpers/util.js";

const users = ["Mohammad", "Lance", "Marco", "Maggie"];

const userPopulate = () => {
  let domString = "";
  domString += `<select class="selectpicker btn-success">`;
  domString += `<option class="FirstItemHide">Select User</option>`;
  for (let i = 0; i < users.length; i++) {
    domString += `<option class="bg-light text-dark my-4" id="${users[i]}-user">${users[i]}</option>`;
  }
  domString += `</select>`;
  printToDom(domString, "users-select");
};

export { userPopulate };
