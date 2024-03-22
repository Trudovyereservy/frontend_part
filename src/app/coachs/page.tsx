"use client";

import { CoachList } from "../../components/CoachCards/CoachList/CoachList";
import { coachCards } from "@/utils/constants";
import { DescriptionPages } from "@/components/DescriptionPages/DescriptionPages";
import { descriptionPages } from "@/utils/constants";

export default function CoachsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <CoachList coachCards={coachCards} />
    </>
  );
}
