import { ADD_FLASH_MESSAGE, DEL_FLASH_MESSAGE } from "../utils/constants";

import shortid from "shortid";
import findIndex from "lodash/findIndex";

const flashMessage = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        },
      ];
    case DEL_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
    default:
      return state;
  }
};

export default flashMessage;
