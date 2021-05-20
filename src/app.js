import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import Provider from './provider/Provider';
import AppRouter from './routers/AppRouter';
import fonts from './utils/fonts';
import consoleLog from './utils/consoleLog';
// import initializePages from './microcms/initializePages';
// import updatePages from './microcms/updatePages';
// import store from './store/store';
// import { setPages } from './actions/articleActions';

const jsx = (
  <Provider>
    {consoleLog()}
    {fonts(document)}
    <Reset />
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
