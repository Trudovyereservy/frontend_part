'use client';

import Breadcrumbs from "@/components/Breadcrumb/Breadcrumbs";
import { DescriptionPages } from "@/components/DescriptionPages/DescriptionPages";
import { descriptionPages } from "@/utils/constants";

export default function NewsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Блог" />
      </head>
      <Breadcrumbs/>
      <DescriptionPages descriptionPages={descriptionPages} />
    </>
  );
}
