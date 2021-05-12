import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createDataOne, createDataTwo } from '../fixtures/createData';

const blogData = [createDataOne, createDataTwo];
const mockStore = configureMockStore([thunk]);
const store = mockStore({ blogData: blogData });

export default ({ children }) => <Provider store={store}>{children}</Provider>;
