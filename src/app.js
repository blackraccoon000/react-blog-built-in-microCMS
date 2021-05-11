import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './store/store';
import { createBlog } from './actions/blogActions';
import {
  createDataOne,
  createDataTwo,
  createDataThree,
  createDataFour,
  createDataFive,
} from './tests/fixtures/createData';

store.subscribe(() => {
  const state = store.getState();
  console.log('all ', state);
});

store.dispatch(createBlog(createDataOne));
store.dispatch(createBlog(createDataTwo));
store.dispatch(createBlog(createDataThree));
store.dispatch(createBlog(createDataFour));
store.dispatch(createBlog(createDataFive));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
