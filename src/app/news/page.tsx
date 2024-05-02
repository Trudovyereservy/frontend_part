'use client';

import Head from 'next/head';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { Pagination } from '@/components/Pagination/Pagination';
import { descriptionPages } from '@/utils/constants';

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Блог" />
      </Head>
      <DescriptionPages descriptionPages={descriptionPages} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={117} currentPage={3} />
    </>
  );
}
