import React from 'react';

import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants'

import { DescriptionPages } from './DescriptionPages';

it('renders DescriptionPages component', () => {
  render(<DescriptionPages descriptionPages={descriptionPages} />);
  const descriptionPagesElement = screen.getByText('Новости');
  expect(descriptionPagesElement).toBeInTheDocument();
})
// test('renders DescriptionPages component', () => {
//   const title = descriptionPages.find((item) => item.route === '/news')?.page;
//   const { getByRole } = render(<DescriptionPages descriptionPages={descriptionPages} />);
//   const titleElement = getByRole('article'); // Example text to check for
//   expect(titleElement).toBeInTheDocument();
// });