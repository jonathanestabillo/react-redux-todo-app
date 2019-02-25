import { LOCALSTORAGE_NAME, LOAD_STATE_LOCALSTORAGE } from '../constants';

export const LoadStateLocalStorage = () => {
  return (dispatch) => {
    const localStorageState = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME));
    
    (localStorageState) ? dispatch({ 
      type: LOAD_STATE_LOCALSTORAGE, 
      payload: localStorageState 
    }) : dispatch({ 
      type: LOAD_STATE_LOCALSTORAGE, 
      payload: null 
    });
  }
}
