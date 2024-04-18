'use client';

import { useState } from 'react';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Filter from '@/components/Filter/Filter';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';
import { descriptionPages, testNewsPosts, testNewsTags } from '@/utils/constants';

export default function NewsPage() {
  const [posts, setPosts] = useState<Array<NewsPost | BlogCard>>(testNewsPosts);

  const filterPosts = (filtredPosts: Array<NewsPost | BlogCard>) => {
    setPosts(filtredPosts);
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Filter tags={testNewsTags} posts={testNewsPosts} filterPosts={filterPosts} />
    </>
  );
}
