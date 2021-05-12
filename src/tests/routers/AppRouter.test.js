import React from 'react';
import { render } from '@testing-library/react';
import ProviderMock from '../fixtures/ProviderMock';
import AppRouter from '../../routers/AppRouter';

it('AppRouter経由でHomeディレクトリが描画されることを確認', () => {
  const wrapper = render(
    <ProviderMock>
      <AppRouter />
    </ProviderMock>
  );
  expect(wrapper.container).toMatchSnapshot();
});
