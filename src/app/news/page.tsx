'use client';

import { DescriptionPages } from "@/components/DescriptionPages/DescriptionPages";
import Filter from "@/components/Filter/Filter";
import { descriptionPages } from "@/utils/constants";

export default function NewsPage() {
  const tags = [
    { id: 0, name: "Пример" },
    { id: 1, name: "Пример пример" },
    { id: 2, name: "Пример" },
    { id: 3, name: "Пример пример" },
    { id: 4, name: "Пример" },
    { id: 5, name: "Пример пример" },
    { id: 6, name: "Пример" },
    { id: 7, name: "Пример пример" },
    { id: 8, name: "Пример" }
  ]

  const testPosts = [
    {
      id: 0,
      tags: ["1", "2"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    },
    {
      id: 1,
      tags: ["2"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 2,
      tags: ["3", "4", "5"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 3,
      tags: ["3", "5"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 4,
      tags: ["4"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 5,
      tags: ["4", "6"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 6,
      tags: ["7"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 7,
      tags: ["8"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }, {
      id: 8,
      tags: ["8", "1"],
      images: ['/sports-girl-in-gym-class 1.jpg'],
      text: "Пример текста пример текста пример текста пример текста",
      short_description: "Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста"
    }
  ]

  return (
    <>
      <head>
        <title>Трудовые резервы | Новости</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Filter tags={tags} />
    </>
  );
}
