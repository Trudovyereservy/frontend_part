'use client';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { blogCards } from '@/utils/constans';

import {CardsList} from '../../components/BlockCards/CardsList/CardList';

export default function BlogPage() {
  const style = {
    color: 'red',
    fontSize: 20,
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
    <DescriptionPages />
    <CardsList blogCards={blogCards}/>
    </>
  );
}
