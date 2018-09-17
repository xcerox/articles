import { createReducer } from 'Factories/create-reducer';
import { LOAD_STARTED, LOAD_COMPLETED,  LOAD_FAILED } from 'Constants/loading-types';
import { mapKeys } from 'lodash';

const loadingHandler = {

  [LOAD_STARTED]: (state, action) => {
    let copy = Object.assign({}, state);
    let component = state[action.component] || {};
    copy[action.component] = { 
      isloading: true,
      hasError: false,
      data: component.data,
    }
    return copy
  },
  [LOAD_COMPLETED]: (state, action) => {
    let copy = Object.assign({}, state);
    let data = mapKeys(action.payload.data, 'id');
    
    copy[action.component] = { 
      isloading: false,
      hasError: false,
      data: data,
    }
    return copy
  },
  [LOAD_FAILED]: (state, action) => {
    let copy = Object.assign({}, state);
    let component = state[action.component] || {};
    copy[action.component] = { 
      isloading: false,
      hasError: true,
      data: component.data,
    }
    return copy
  },
}

const loadingReducer = createReducer({}, loadingHandler);
export { loadingReducer };
