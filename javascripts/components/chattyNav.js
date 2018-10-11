import {printToDom} from "../helpers/util.js";

const users = ['Mohammad', 'Lance', 'Marco', 'Maggie'];

      const userPopulate = () => {
        let domString = '';

          domString += `<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"> Select User </button>`;    
            domString += `<div class="dropdown-menu">`;
                domString += `<a class="d-inline dropdown-item" href="#" id="Moh-user">${users[0]}</a>`;
                domString += `<a class="dropdown-item" href="#" id="Lan-user">${users[1]}</a>`;
                domString += `<a class="dropdown-item" href="#" id="Mar-user">${users[2]}</a>`;
                domString += `<a class="dropdown-item" href="#" id="Mag-user">${users[3]}</a>`;
            domString += `</div>`;

            printToDom(domString, "users-select");
    };
    
export {userPopulate}