'use client';

import { useState } from 'react';

import AddressesList from '@/components/Addresses/AddressesList';
import ContactCardList from '@/components/ContactCards/ContactCardsList/ContactCardList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Map from '@/components/Map/Map';
import { descriptionPages, testAddresses, testContancts } from '@/utils/constants';

export default function ContactsPage() {
  const [mapUrl, setMapUrl] = useState(testAddresses[0].mapUrl);

  const handleAddressChange = (mapUrl: string) => {
    setMapUrl(mapUrl);
  };

  return (
    <>
      <head>
        <title>Трудовые резервы | Контакты</title>
        <meta name="title" content="Блог" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Map mapUrl={mapUrl} />
      <AddressesList addresses={testAddresses} onClick={handleAddressChange} />
      <ContactCardList cards={testContancts} />
    </>
  );
}
