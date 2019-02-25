import { LOCALSTORAGE_NAME } from '../constants';
import uuid from 'uuid/v1';

const txtgen = require("txtgen");

export default new Promise((resolve, reject) => {
  const localStorageState = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME));
  (localStorageState) ? resolve(createResponse(localStorageState)) : resolve(createItemList(5));
});

const createItemList = (itemCount) => {
  let items = [];
  
  for(let count = 0; count <= itemCount; count ++){
    let item = {
      id: uuid(),
      value: txtgen.sentence(),
      completed: false,
    }

    items.push(item);
  }

  return createResponse(items);
}

const createResponse = (items) => {
  let response = {
    status: 200,
    json: () => Promise.resolve(items),
  }

  return response;
}