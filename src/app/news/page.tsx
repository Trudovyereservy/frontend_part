'use client';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { NewsCardsList } from '@/components/NewsCards/NewsCardsList/NewsCardsList';
import { newsCards, descriptionPages } from '@/utils/constants';

export default function NewsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Новости" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <NewsCardsList newsCards={newsCards} />
    </>
  );
}
