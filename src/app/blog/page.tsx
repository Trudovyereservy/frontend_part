import type { Metadata } from 'next';

import { useState } from 'react';

import { CardsList } from '@/components/BlockCards/CardsList/CardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Filter from '@/components/Filter/Filter';
import { NewsPost, BlogCard } from '@/components/Filter/Filter.props';
import { blogCards, descriptionPages, testBlogTags } from '@/utils/constants';
import { Pagination } from '@/components/Pagination/Pagination';

export const metadata: Metadata = {
  title: { absolute: 'Трудовые резервы | Блог' },
  description:
    'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте...',
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Array<NewsPost | BlogCard>>(blogCards);

  const filterPosts = (filtredPosts: Array<NewsPost | BlogCard>) => {
    setPosts(filtredPosts);
  };

  return (
    <>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Filter tags={testBlogTags} posts={blogCards} filterPosts={filterPosts} />
      <CardsList blogCards={posts} />
      {/* <CardsList blogCards={blogCards} /> */}
      {/* TODO: Update with functionality */}
      <Pagination totalCards={320} currentPage={1} />
    </>
  );
}
