'use client';

import Head from 'next/head';
import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { blogCards, descriptionPages } from '@/utils/constants';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </Head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CardsList blogCards={blogCards} />
    </>
  );
}
