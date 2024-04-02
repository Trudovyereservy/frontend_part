'use client';

import AddressesList from '@/components/Addresses/AddressesList';
import ContactCardList from '@/components/ContactCards/ContactCardsList/ContactCardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { Map } from '@/components/Map/Map';
import { descriptionPages, testAddresses, testContancts } from "@/utils/constants";

export default function ContactsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Контакты</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Map />
      <AddressesList addresses={testAddresses} />
      <ContactCardList cards={testContancts} />
    </>
  );
}
