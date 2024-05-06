//Для того что бы корректно работала смена заголовком страниц и в консоль не сыпались ошибки, нужно убрать у этого комопнента директиву use client и перенести ее в дочерние компоненты?!
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
        <meta name="title" content="Трудовые резервы | Контакты" />
      </head>
      <DescriptionPages descriptionPages={descriptionPages} />
      <Map mapUrl={mapUrl} />
      <AddressesList addresses={testAddresses} onClick={handleAddressChange} />
      <ContactCardList cards={testContancts} />
    </>
  );
}
