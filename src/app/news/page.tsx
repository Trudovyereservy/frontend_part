import type { Metadata } from 'next';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { Pagination } from '@/components/Pagination/Pagination';
import { descriptionPages } from '@/utils/constants';

export const metadata: Metadata = {
  title: { absolute: 'Трудовые резервы | Новости' },
  description:
    'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте...',
};

export default function NewsPage() {
  return (
    <>
      <DescriptionPages descriptionPages={descriptionPages} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={117} currentPage={3} />
    </>
  );
}
