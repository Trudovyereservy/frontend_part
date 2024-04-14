"use client";

import { CardsList } from "@/components/BlockCards/CardsList/CardList";
import { DescriptionPages } from "@/components/DescriptionPages/DescriptionPages";
import { blogCards, descriptionPages } from "@/utils/constants";

export default function BlogPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CardsList blogCards={blogCards} />
    </>
  );
}
