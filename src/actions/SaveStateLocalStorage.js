import {LOCALSTORAGE_NAME} from '../constants';

export const SaveStateLocalStorage = () => {
  return (dispatch, getState) => {
    window.localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(getState().todos.items));
  }
}
