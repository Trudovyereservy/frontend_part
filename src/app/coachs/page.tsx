'use client';

import { CoachList } from '@/components/CoachCards/CoachList/CoachList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';

import { Pagination } from '@/components/Pagination/Pagination';
import { coachCards, descriptionPages } from '@/utils/constants';

export default function CoachsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Тренерский состав" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CoachList coachCards={coachCards} />
      {/* TODO: Update with functionality */}
      <Pagination totalCards={117} currentPage={3} />
    </>
  );
}
