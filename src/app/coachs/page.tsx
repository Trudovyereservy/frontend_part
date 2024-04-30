'use client';

import Breadcrumbs from '@/components/Breadcrumb/Breadcrumbs';
import { CoachList } from '@/components/CoachCards/CoachList/CoachList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { coachCards, descriptionPages } from '@/utils/constants';

export default function CoachsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </head>
      <Breadcrumbs/>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CoachList coachCards={coachCards} />
    </>
  );
}
