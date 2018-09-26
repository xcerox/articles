import { createReducer } from 'Factories/create-reducer';
import { FETCH_ARTICLE, FETCH_ARTICLES, DELETE_ARTICLE } from 'Constants/articles-types';
import { mapKeys, omit } from 'lodash';

const articleHandler = {
  [DELETE_ARTICLE]: (state, action) => {
    return omit(state, action.payload.data);
  },
  [FETCH_ARTICLE]: (state, action) => {
    return {...state, [action.payload.data.id]: action.payload.data };
  },
  [FETCH_ARTICLES]: (state, action) => {
    return mapKeys(action.payload.data, 'id');
  },
}

const articleReducer = createReducer({}, articleHandler);
export { articleReducer };
