import { render, screen } from '@testing-library/react';

import { descriptionPages } from '@/utils/constants';

import CoachsPage from '../page';

const mockUsePathname = '/coachs';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),

  usePathname: () => mockUsePathname,
}));

test('renders CoachsPage component', () => {
  render(<CoachsPage />);
  const title = descriptionPages.find((item) => item.route === mockUsePathname)!.page;
  const descriptionPagesElement = screen.getByText(title);
  expect(descriptionPagesElement).toBeInTheDocument();
});
