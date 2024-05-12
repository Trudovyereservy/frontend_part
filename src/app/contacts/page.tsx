import { Metadata } from 'next';

import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import Map from '@/components/Map/Map';
import { descriptionPages, testAddresses, testContancts } from "@/utils/constants";
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumbs';
import ContactsProvider from '../../components/ProviderComponents/ContactsProvider';

export const metadata: Metadata = {
  title: { absolute: 'Трудовые резервы | Контакты' },
  description:
    'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте...',
};

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs />
      <DescriptionPages descriptionPages={descriptionPages} />
      <ContactsProvider />
    </>
  );
}
