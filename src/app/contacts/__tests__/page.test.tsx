import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants';

import ContactsPage from '../page';

const mockUsePathname = '/contacts';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),

  usePathname: () => mockUsePathname,
}));

test('renders ContactsPage component', () => {
  render(<ContactsPage />);
  const title = descriptionPages.find((item) => item.route === mockUsePathname)!.page;
  const descriptionPagesElement = screen.getByText(title);
  expect(descriptionPagesElement).toBeInTheDocument();
});
