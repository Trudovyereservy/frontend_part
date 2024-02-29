'use client';
import {CardsList} from '../../components/BlockCards/CardsList/CardList';
import { blogCards } from '@/utils/constans';

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
    <CardsList blogCards={blogCards}/>
    </>
  );
}
