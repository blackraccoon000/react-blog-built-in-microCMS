import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import Provider from './provider/Provider';
import AppRouter from './routers/AppRouter';
import fonts from "./utils/fonts"
import consoleLog from "./utils/consoleLog"
import initialSetup from './microcms/initialSetup';

const jsx = (
  <Provider>
    {consoleLog()}
    {fonts(document)}
    <Reset />
    {initialSetup()}
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
