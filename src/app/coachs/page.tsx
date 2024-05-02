'use client';

import Head from 'next/head';
import { CoachList } from '@/components/CoachCards/CoachList/CoachList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { coachCards, descriptionPages } from '@/utils/constants';

export default function CoachsPage() {
  return (
    <>
      <Head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </Head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CoachList coachCards={coachCards} />
    </>
  );
}
