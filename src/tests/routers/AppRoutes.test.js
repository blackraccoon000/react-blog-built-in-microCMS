import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ProviderMock from '../fixtures/ProviderMock';
import AppRoutes from '../../routers/AppRoutes';

let wrapper;

it('Homeが描画できているか', () => {
  wrapper = render(
    <ProviderMock>
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    </ProviderMock>
  );
  expect(wrapper.container).toMatchSnapshot();
});
