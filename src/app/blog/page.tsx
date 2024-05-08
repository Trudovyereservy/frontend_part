'use client';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumbs';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';

import { Pagination } from '@/components/Pagination/Pagination';
import { blogCards, descriptionPages } from '@/utils/constants';

export default function BlogPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <Breadcrumbs/>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CardsList blogCards={blogCards} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={320} currentPage={1} />
    </>
  );
}
