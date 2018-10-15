import { printToDom } from "../helpers/util.js";

const users = ["Mohammad", "Lance", "Marco", "Maggie"];

const userPopulate = () => {
  let domString = "";
  domString += `<option selected="selected" class="navbar-option">Select User</option>`;
  for (let i = 0; i < users.length; i++) {
    domString += `<option class="navbar-option bg-light text-dark my-4" id="${users[i]}-user">${users[i]}</option>`;
  }
  domString += `</select>`;
  printToDom(domString, "user-selected");
};

export { userPopulate };
