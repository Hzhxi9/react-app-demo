import { ADD_FLASH_MESSAGE, DEL_FLASH_MESSAGE } from "../utils/constants";

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  };
};

export const deleteFlashMessage = (id) => {
  return {
    type: DEL_FLASH_MESSAGE,
    id,
  };
};
