'use client';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { descriptionPages } from '@/utils/constants';

export default function NewsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
    </>
  );
}
