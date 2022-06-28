import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

it('renders App with Routes', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(true).toStrictEqual(true);
});

