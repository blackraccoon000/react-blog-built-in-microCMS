import { createStore, combineReducers } from 'redux';

import articleReducer from '../reducers/articleReducer';

const store = createStore(
  combineReducers({
    pages: articleReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
