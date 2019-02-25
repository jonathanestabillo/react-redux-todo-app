import {
  LOAD_STATE_LOCALSTORAGE,
  ADD_ITEM,
  EDIT_ITEM,
  SELECT_EDIT_ITEM,
  CANCEL_EDIT_ITEM
} from '../constants';

import { DELETE_ITEM } from '../actions/DeleteItem';
import { ITEM_COMPLETION } from '../actions/ItemCompletion';
import { REORDER_ITEM } from '../actions/ReorderItem';

const INITIAL_STATE = {
  items: [],
};

const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_STATE_LOCALSTORAGE: {
      if(action.payload){
        return { ...state, items: action.payload };
      }else{
        return state;
      }
    }

    case ADD_ITEM: {
      return { ...state, items: [...state.items, action.payload] };
    }

    case CANCEL_EDIT_ITEM: {
      const newState = state.items.length ? { ...state, editingItem: {} } : { ...state };
      return newState;
    }

    case DELETE_ITEM: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    }

    case EDIT_ITEM: {
      return { ...state, items: action.payload, editingItem: {} };
    }

    case ITEM_COMPLETION: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          item.completed = !item.completed;
        }

        return item;
      });

      return { ...state, items };
    }

    case SELECT_EDIT_ITEM: {
      return { ...state, editingItem: action.payload };
    }

    case REORDER_ITEM: {
      const clone = [...state.items];
      const [removed] = clone.splice(action.payload.initialPosition, 1);
      clone.splice(action.payload.newPosition, 0, removed);

      return { ...state, items: clone };
    }

    default: {
      return state;
    }
  }
};

export default TodosReducer;
