import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants'

import NewsPage from '../page';

const mockUsePathname = '/news';

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),

  usePathname: () => mockUsePathname,
}));

test('renders NewsPage component', () => {
  render(<NewsPage />);
  const title = descriptionPages.find((item) => item.route === mockUsePathname)!.page;
  const descriptionPagesElement = screen.getByText(title);
  expect(descriptionPagesElement).toBeInTheDocument();
});