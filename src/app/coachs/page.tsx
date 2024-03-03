'use client';
import { CoachList } from '../../components/CoachCards/CoachList/CoachList';
import { coachCards } from '@/utils/constans';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';

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
