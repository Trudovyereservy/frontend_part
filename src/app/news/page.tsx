'use client';

<<<<<<< HEAD
import { useState } from 'react';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Filter from '@/components/Filter/Filter';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';
import { descriptionPages, testNewsPosts, testNewsTags } from '@/utils/constants';
=======
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { Pagination } from '@/components/Pagination/Pagination';
import { descriptionPages } from '@/utils/constants';
>>>>>>> develop

export default function NewsPage() {
  const [posts, setPosts] = useState<Array<NewsPost | BlogCard>>(testNewsPosts);

  const filterPosts = (filtredPosts: Array<NewsPost | BlogCard>) => {
    setPosts(filtredPosts);
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Новости" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
<<<<<<< HEAD
      <Filter tags={testNewsTags} posts={testNewsPosts} filterPosts={filterPosts} />
=======
      {/* TODO: Update with functionality */}
      <Pagination totalCards={117} currentPage={3} />
>>>>>>> develop
    </>
  );
}
