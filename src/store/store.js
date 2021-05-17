import { createStore, combineReducers } from 'redux';

import articleReducer from '../reducers/articleReducer';
import viewReducer from '../reducers/viewReducer';

const store = createStore(
  combineReducers({
    pages: articleReducer,
    views: viewReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
