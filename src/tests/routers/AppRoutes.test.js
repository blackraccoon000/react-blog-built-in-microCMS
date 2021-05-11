import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import AppRoutes from '../../routers/AppRoutes';

let wrapper;

// jest.mock("../../components/Header")
// jest.mock("../../components/Home")
// jest.mock("../../components/Dashboard")

it('Homeが描画できているか', () => {
  wrapper = render(
    <MemoryRouter>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(wrapper.container).toMatchSnapshot();
});

it('Dashboardが描画できているか', () => {
  wrapper = render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(wrapper.container).toMatchSnapshot();
});
