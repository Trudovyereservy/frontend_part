'use client';

import { useState } from 'react';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Filter from '@/components/Filter/Filter';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';
import { blogCards, descriptionPages, testBlogTags } from '@/utils/constants';
import { Pagination } from '@/components/Pagination/Pagination';

export default function BlogPage() {

  const [posts, setPosts] = useState<Array<NewsPost | BlogCard>>(blogCards);

  const filterPosts = (filtredPosts: Array<NewsPost | BlogCard>) => {
    setPosts(filtredPosts);
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Filter tags={testBlogTags} posts={blogCards} filterPosts={filterPosts} />
      <CardsList blogCards={posts} />
      {/* <CardsList blogCards={blogCards} /> */}
      {/* TODO: Update with functionality */}
      <Pagination totalCards={320} currentPage={1} />
    </>
  );
}
