'use client';

import { useState } from 'react';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Filter from '@/components/Filter/Filter';
import { blogCards, descriptionPages, testBlogTags } from '@/utils/constants';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';


export default function BlogPage() {
  const style = {
    color: "red",
    fontSize: 20,
  };

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
    </>
  );
}
