'use client';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { descriptionPages } from "@/utils/constants";

export default function ContactsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Контакты</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
    </>
  );
}
