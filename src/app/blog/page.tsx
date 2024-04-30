'use client';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumbs';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { blogCards,descriptionPages } from '@/utils/constants';

export default function BlogPage() {
  const style = {
    color: "red",
    fontSize: 20,
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <Breadcrumbs/>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CardsList blogCards={blogCards} />
    </>
  );
}
