import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../../components/L5_Pages/Home';
import {
  createDataOne,
  createDataTwo,
  createDataThree,
  createDataFour,
  createDataFive,
} from '../../fixtures/createData';

let wrapper;

const blogData = [
  createDataOne,
  createDataTwo,
  createDataThree,
  createDataFour,
  createDataFive,
];

beforeEach(() => {
  wrapper = render(<Home blogData={blogData} />);
});

it('Home Components Render', () => {
  expect(wrapper.container).toMatchSnapshot();
});
