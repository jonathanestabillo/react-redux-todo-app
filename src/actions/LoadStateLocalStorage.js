import { LOAD_STATE_LOCALSTORAGE } from '../constants';
import fetch from '../mocks/fetch';

export const LoadStateLocalStorage = () => {
  return (dispatch) => {
    fetch('./api/todoList').then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        if(data){
          dispatch({
            type: LOAD_STATE_LOCALSTORAGE,
            payload: data,
          });
        }else{
          throw new Error('There is a problem parsing the API result.');
        }
      });
    }).catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
}
