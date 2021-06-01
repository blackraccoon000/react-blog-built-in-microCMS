import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import articlesReducer from '../reducers/articlesReducer';
import viewsReducer from '../reducers/viewsReducer';
import statusReducer from '../reducers/statusReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    articles: articlesReducer,
    views: viewsReducer,
    status: statusReducer,
  }),
  composedEnhancer
);

export default store;
