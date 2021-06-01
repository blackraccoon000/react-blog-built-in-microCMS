import React from 'react';
import { Provider, combineReducers } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createDataOne, createDataTwo } from '../fixtures/createData';
import keywordRelMock from './keywordRelMock';
import pages from './pages';

const blogData = [createDataOne, createDataTwo];
const mockStore = configureMockStore([thunk]);

const store = mockStore({
  articles: pages,
  views: { keywordRelational: keywordRelMock },
});

export default ({ children }) => <Provider store={store}>{children}</Provider>;
