'use client';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { Pagination } from '@/components/Pagination/Pagination';
import { descriptionPages } from '@/utils/constants';

export default function NewsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Новости" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={117} currentPage={3} />
    </>
  );
}
