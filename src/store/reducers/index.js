 import { combineReducers } from 'redux';
 import { articleReducer } from 'Reducers/article-reducer';
 import { reducer as formReducer } from 'redux-form';


 const rootReducer = combineReducers({
  articles: articleReducer,
  form: formReducer,
 });

 export default rootReducer;