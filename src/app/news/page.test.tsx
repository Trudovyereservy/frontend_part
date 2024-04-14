import React from 'react';

import { render } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants'

import NewsPage from './page';

test('renders NewsPage component', () => {
  const title = descriptionPages.find((item) => item.route === '/news')?.page;
  const { getByText } = render(<NewsPage />);
  const titleElement = getByText(title || 'Новости'); // Example text to check for
  expect(titleElement).toBeInTheDocument();
});