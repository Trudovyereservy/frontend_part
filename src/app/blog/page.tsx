'use client';

import { useState } from 'react';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
<<<<<<< HEAD
import Filter from '@/components/Filter/Filter';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';
import { blogCards, descriptionPages, testBlogTags } from '@/utils/constants';

export default function BlogPage() {
  const style = {
    color: "red",
    fontSize: 20,
  };

  const [posts, setPosts] = useState<Array<NewsPost | BlogCard>>(blogCards);

  const filterPosts = (filtredPosts: Array<NewsPost | BlogCard>) => {
    setPosts(filtredPosts);
  };
  
=======

import { Pagination } from '@/components/Pagination/Pagination';
import { blogCards, descriptionPages } from '@/utils/constants';

export default function BlogPage() {
>>>>>>> develop
  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
<<<<<<< HEAD
      <Filter tags={testBlogTags} posts={blogCards} filterPosts={filterPosts} />
      <CardsList blogCards={posts} />
=======
      <CardsList blogCards={blogCards} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={320} currentPage={1} />
>>>>>>> develop
    </>
  );
}
