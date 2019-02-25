import {
  LOAD_STATE_LOCALSTORAGE,
  ADD_ITEM,
  EDIT_ITEM,
  SELECT_EDIT_ITEM,
  CANCEL_EDIT_ITEM,
  DELETE_ITEM,
  REORDER_ITEM
} from '../constants';

import { ITEM_COMPLETION } from '../actions/ItemCompletion';

const INITIAL_STATE = {
  items: [],
};

const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_ITEM:
    case REORDER_ITEM: {
      return { ...state, items: action.payload };
    }
    
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

    default: {
      return state;
    }
  }
};

export default TodosReducer;
