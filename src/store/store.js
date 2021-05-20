import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import articleReducer from '../reducers/articleReducer';
import viewReducer from '../reducers/viewReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    pages: articleReducer,
    views: viewReducer,
  }),
  composedEnhancer
);

export default store;
