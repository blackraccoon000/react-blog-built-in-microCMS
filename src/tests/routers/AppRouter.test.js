import React from 'react';
import { render } from '@testing-library/react';
import AppRouter from '../../routers/AppRouter';

/**
 * use manual mock
 */
// jest.mock("../../components/Header")
// jest.mock("../../components/Home")

it('AppRouter経由でHomeディレクトリが描画されることを確認', () => {
  const wrapper = render(<AppRouter />);
  expect(wrapper.container).toMatchSnapshot();
});
