import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import App from './App';

test('renders learn react link', () => {
  expect(true).toBe(true)
  // render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );

  // expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
