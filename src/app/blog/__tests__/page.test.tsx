import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants';

import BlogPage from '../page';

const mockUsePathname = '/blog';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),

  usePathname: () => mockUsePathname,
}));

test('renders BlogPage component', () => {
  render(<BlogPage />);
  const title = descriptionPages.find((item) => item.route === mockUsePathname)!.page;
  const descriptionPagesElement = screen.getByText(title);
  expect(descriptionPagesElement).toBeInTheDocument();
});
