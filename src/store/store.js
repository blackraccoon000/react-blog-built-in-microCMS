import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import contentsReducer from '../reducers/contentsReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    contents: contentsReducer,
  }),
  composedEnhancer
);

export default store;
