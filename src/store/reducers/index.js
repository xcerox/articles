 import { combineReducers } from 'redux';
 import { loadingReducer } from 'Reducers/loading-reducer';


 const rootReducer = combineReducers({
  loading: loadingReducer,
 });

 export default rootReducer;