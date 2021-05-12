import { createStore, combineReducers } from 'redux';

import blogReducer from '../reducers/blogReducer';

const store = createStore(
  combineReducers({
    blogData: blogReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
