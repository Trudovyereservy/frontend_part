'use client';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { coachCards } from '@/utils/constans';

import { CoachList } from '../../components/CoachCards/CoachList/CoachList';

export default function CoachsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages />
      <CoachList coachCards={coachCards} />
    </>
  );
}
