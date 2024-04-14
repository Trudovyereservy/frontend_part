import React from 'react';

import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants'

import NewsPage from './page';

it('renders NewsPage component', () => {
  render(<NewsPage />);
  const descriptionPagesElement = screen.getByText('Новости');
  expect(descriptionPagesElement).toBeInTheDocument();
})
// test('renders DescriptionPages component', () => {
//   const { getByText } = render(<NewsPage />);
//   const descriptionPagesElement = getByText('Новости');
//   expect(descriptionPagesElement).toBeInTheDocument();
  
// });